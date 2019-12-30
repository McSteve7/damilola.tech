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
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-2xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-md md:text-xl lg:text-1xl font-sans pt-4 md:pt-12 text-justify`};
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
        <Subtitle>I'm a Front-end developer & Aspiring Product Manager.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Weather App "
            link="https://weather-apps.netlify.com/"
            bg="linear-gradient(to down, #D4145A 0%, #FBB03B 100%)"
          >
            This App is built on ReactJs. It provides users with basic weather information of a place. The
            OpenWeatherApp API was used to serve the app with the information.
          </ProjectCard>
          <ProjectCard
            title="myCountry App"
            link="https://mycountry.stephenajiboye.now.sh"
            bg="linear-gradient(to down, #662D8C 0%, #ED1E79 100%)"
          >
            A NextJS App built for checking relevant details about any country in the world. The app utilizes the
            RestCountries API that provides the App with infomation. ZEIT/NOW was utilized in the deployment process. 
          </ProjectCard>
          <ProjectCard title="Defax" bg="linear-gradient(to down, #009245 0%, #FCEE21 100%)">
            A corporate sample website for Defax Consulting built on WordPress CMS. Elementor Page Builder was used to
            modify and style the website layout while using other relevant plugins also.
          </ProjectCard>
          <ProjectCard title="BitzPrice" bg="linear-gradient(to down, #D585FF 0%, #00FFEE 100%)">
            This App converts current bitcoin rates to different currencies. Built with NextJS. The app is still pretty
            much a work in progress and more currency options will be optimized into it. (Yet to be deployed)
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About me</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Damilola Ajiboye" />
          <AboutSub>
            I have a knack for evolving tech, business management and customer relationship
            hence, my strong passion for product management... 
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        However, I am a growth driven intermediate frontend developer capable of analyzing client’s
        need with little or no supervision and deliver a remarkable solution.
        Ability to adapt and learn fast any technology and process management system
        utilized in any organization. 
        Looking forward to working in a team of other amazing developer that are sold 
        out to building user friendly solutions that addresses real life problems. 
        </AboutDesc>
        <AboutDesc>
          <button type="button">
            <a target="_blank" href="https://drive.google.com/open?id=1zT6Hi_YqfQF8RukKmF9r1ii6bALELUIm">My Resume
            </a>
          </button>
        </AboutDesc>
      </About>
      <Contact offset={4}> 
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Send me a <a href="mailto:stephenajiboye7@gmail.com">Mail</a> and let's discuss about that your upcoming
            project that you would like me to work on. You can also read my web development articles on my{' '}             
            <a target="_blank" href="https://damilola.hashnode.dev/">Blog</a>

          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Damilola Ajiboye <br />
          <a href="https://github.com/McSteve7">Github</a> <a href="https://twitter.com/steve_dammy">Twitter</a>{' '}
          <a href="https://linkedin.com/in/damilola-ajiboye">Linkedin</a>{' '}
          <a href="https://instagram.com/styleblogazine">Instagram</a>{' '}
          <a href="https://medium.com/damilola-ajiboye">Medium</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
