export default {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  routes: {
    es: {
      servicios: 'servicios',
      portafolio: 'portafolio',
      blog: 'blog',
      sobre: 'sobre',
    },
    en: {
      servicios: 'services',
      portafolio: 'portfolio',
      blog: 'blog',
      sobre: 'about',
    },
  },
  namespaces: ['common', 'home', 'services', 'blog', 'portfolio', 'about'],
  defaultNamespace: 'common',
};
