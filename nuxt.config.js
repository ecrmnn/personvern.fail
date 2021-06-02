import { sites } from './database/db.json';

const env = {
  BASE_URL: process.env.URL || 'http://localhost:3000',
};

export default {
  target: 'static',

  head: {
    titleTemplate: '%s - Personvern.fail',

    meta: [{
      charset: 'utf-8',
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    }, {
      hid: 'description',
      name: 'description',
      content: 'Liste over norske bedrifter og aktører som bryter personvernloven',
    }, {
      hid: 'og:locale',
      property: 'og:locale',
      content: 'nb_NO',
    }, {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    }, {
      hid: 'og:title',
      property: 'og:title',
      content: 'Personvern.fail',
    }, {
      hid: 'og:description',
      property: 'og:description',
      content: 'Liste over norske bedrifter og aktører som bryter personvernloven',
    }, {
      hid: 'og:url',
      property: 'og:url',
      content: 'SHOULD BE SET IN LAYOUT',
    }, {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: 'Personvern.fail',
    }, {
      hid: 'og:image',
      property: 'og:image',
      content: `${env.BASE_URL}/og.gif`,
    }],
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'bg-gray-200',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  plugins: [
    '~/plugins/dayjs.js',
  ],

  generate: {
    async routes() {
      return ['/', ...sites.map(({ slug }) => slug)];
    },
  },
};
