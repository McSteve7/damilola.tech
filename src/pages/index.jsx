import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import { library } from '@fortawesome/fontawesome-svg-core'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'
import aber from '../images/aber.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faStroopwafel, faCoffee)

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Yo, <br /> I'm Damilola Ajiboye.
        </BigTitle>
        <Subtitle>I'm a Front-end web developer.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="myCountry App "
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A NextJS App built for checking relevant infomation about any country in the world. The app utilizes the
            RestCountries API that serves the App with infomations. It can be used by anyone.
          </ProjectCard>
          <ProjectCard
            title="Weather App"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This App is built on ReactJs. It provides users with basic weather information of a place. The
            OpenWeatherApp API was used to serve the app with the inormations.
          </ProjectCard>
          <ProjectCard
            title="Defax"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A corporate sample website for Defax Consulting built on WordPress CMS. Elementor Page Builder was used to
            modify and style the website layout while using other relevant plugins also.
          </ProjectCard>
          <ProjectCard
            title="BitzPrice"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            This App converts current bitoin rates to different currencies. Built with NextJS. The app is still pretty
            much a work in progress and more currency options will be optimized into it.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About me? I'm gratified!</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Damilola Ajiboye" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I'm a not too terrible junior web developer with few months experience (non professional) most of these time
          involved me playing with HTML, CSS, and a little JavaScript. I started learning about JavaScript frameworks
          since it was quite a challenge for me to build stuffs with pure JavaScript. Shoutout to{' '}
          <a href="https://freecodecamp.com">FreeCodeCamp</a> for making sense out of it for me and pointing towards
          building real life apps with the technonology through their relevant coding challenge. I'm currently learning
          and playing around with ReactJS, NextJS, GatsbyJS and SASS just to name a few. When i'm not playing around
          with code, you can find me volunteering for a project or doing fashion brand consultation or probably
          listening to Hillsong (Yeah, I know npthey are awesome too).
        </AboutDesc>
        <AboutDesc>
          Download or view my resume{' '}
          <button>
            <a target="_blank" href="https://drive.google.com/open?id=1ES7AUhDC-2olrjwEmVW5YPZvb3COmZhv">
              Here
            </a>
          </button>
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:stephenajiboye7@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/McSteve7">
            <FontAwesomeIcon icon="faStroopwafel" />
            </a>{' '}
            & <a href="https://www.instagram.com/styleblogazine">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Damilola Ajiboye{' '}
          <br />
          <a href="https://github.com/McSteve7">Github</a> <a href="https://twitter.com/steve_dammy">Twitter</a>{' '}
          <a href="https://instagram.com/styleblogazine">Instagram</a>{' '}
          <a href="https://medium.com/damilola-ajiboye">Medium</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
