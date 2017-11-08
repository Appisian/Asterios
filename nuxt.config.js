const webpack = require('webpack'); // eslint-disable-line
// const VueLoaderOptionsPlugin = require('vue-loader-options-plugin');
const nib = require('nib');
const rupture = require('rupture');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Global CSS
  */
  loading: { color: '#000000' },
  css: [
    { src: '~assets/styl/main.styl', lang: 'styl' },
  ],
  render: {
    http2: {
      push: true,
    },
  },
  // transition: 'page',
  router: {
    middleware: ['user-agent'],
  },
  plugins: [
    {
      src: '~/plugins/filters',
    },
    // {
    //   src: '~/plugins/globals',
    // },
  ],
  stylus: [
    nib(),
    rupture(),
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: [],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }

      config.plugins.push(new webpack.LoaderOptionsPlugin({
        stylus: {
          default: {
            use: this.nuxt.options.stylus,
            import: ['~assets/styl/core/index.styl'],
          },
        },
      }));
    },
  },

  modules: [
    '@nuxtjs/axios',
  ],
};
