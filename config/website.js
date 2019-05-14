const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Damilola Ajiboye - Front-end web developer', // Navigation and Site Title
  siteTitleAlt: 'Damilola Ajiboye - Front-end web developer', // Alternative Site title for SEO
  siteTitleShort: 'Damilola', // short_name for manifest
  siteHeadline: 'Online Portfolio of Damilola Ajiboye', // Headline for schema.org JSONLD
  siteUrl: 'www.damilola.tech', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'The online portfolio of Damilola Ajiboye, A web developer based in Lagos Nigeria.',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@steve_dammy', // Twitter Username
  ogSiteName: 'Ajiboye Damilola Steve', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
