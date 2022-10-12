require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Paw Tracer`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Arvo`,
          `Raleway`,
          `Passions Conflict`,
          `Peralta`,
          `Abril Fatface`,
          `Paytone One`,
          `Fredoka One`,
          `Roboto Serif\: 800`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}
