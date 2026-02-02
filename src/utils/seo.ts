import type { Locale } from './i18n';

interface SEOData {
  title: string;
  description: string;
  image?: string;
  locale: Locale;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateSchemaOrg(data: SEOData, siteUrl: string) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': data.type === 'article' ? 'Article' : 'WebPage',
    name: data.title,
    description: data.description,
    url: siteUrl,
    inLanguage: data.locale,
  };

  if (data.type === 'article') {
    return {
      ...baseSchema,
      headline: data.title,
      datePublished: data.publishedTime,
      dateModified: data.modifiedTime,
      author: {
        '@type': 'Person',
        name: data.author || 'Nestor Cabrera',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Simio CodeLabs',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/images/logo.png`,
        },
      },
    };
  }

  return baseSchema;
}

export function generateOrganizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: 'Simio CodeLabs',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: 'Desarrollo de software a medida para empresas. Automatización de procesos, e-commerce y sistemas de gestión.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CO',
      addressLocality: 'Colombia'
    },
    founder: {
      '@type': 'Person',
      name: 'Nestor Cabrera',
      jobTitle: 'Software Developer',
      sameAs: [
        'https://github.com/SimioDev',
        'https://www.linkedin.com/in/nestor-cabrera',
        'https://simiodev-portfolio.vercel.app/'
      ]
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'nestor@simiocodelabs.com',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      'https://github.com/SimioDev',
      'https://www.linkedin.com/in/nestor-cabrera'
    ]
  };
}

export function generateWebsiteSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Simio CodeLabs',
    url: siteUrl,
    description: 'Desarrollo de software a medida, automatización de procesos y soluciones tecnológicas para empresas.',
    inLanguage: ['es', 'en'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/blog/?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateServiceSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development',
    provider: {
      '@type': 'Organization',
      name: 'Simio CodeLabs',
      url: siteUrl
    },
    areaServed: {
      '@type': 'Country',
      name: 'Colombia'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Desarrollo',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automatización de Procesos',
            description: 'Eliminación de tareas repetitivas mediante automatización con Python, Node.js y APIs.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce a Medida',
            description: 'Tiendas online optimizadas para conversión con Shopify y WooCommerce.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sistemas de Gestión',
            description: 'ERPs y CRMs personalizados con React, PostgreSQL y APIs REST.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Pages de Alta Conversión',
            description: 'Páginas diseñadas para convertir visitantes en clientes con Astro y React.'
          }
        }
      ]
    }
  };
}
