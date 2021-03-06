const lost = require('lost')
const pxtorem = require('postcss-pxtorem')

const url = 'https://gatsby-starter-kontent-lumen.netlify.com/'

require('dotenv').config()

module.exports = {
  // These properties are used by gatsby-plugin-sitemap
  // https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/#how-to-use
  siteMetadata: {
    url,
    siteUrl: url,
  },
  plugins: [
    {
      resolve: `gatsby-remark-images`,
        options: {
          withAvif: true, 
          withWebp: true,
          maxWidth: 800,
          wrapperStyle: fluidResult => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
        },
    },
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: { trackingId: '' }, // add own google analytics trackingId
    // },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto:400,400i,500,700'],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          lost(),
          pxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              'font',
              'font-size',
              'line-height',
              'letter-spacing',
              'margin',
              'margin-top',
              'margin-left',
              'margin-bottom',
              'margin-right',
              'padding',
              'padding-top',
              'padding-left',
              'padding-bottom',
              'padding-right',
              'border-radius',
              'width',
              'max-width',
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          }),
        ],
        sassOptions: {
          precision: 8,
        },
      },
    },
  ],
}
