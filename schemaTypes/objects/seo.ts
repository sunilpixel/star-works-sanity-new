export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',

  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'text',
    },

    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    },

    {
      name: 'keywords',
      title: 'Keywords',
      type: 'text',
    },

    {
      name: 'metaImage',
      title: 'Meta Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'twitterImage',
      title: 'Twitter Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'twitterTitle',
      title: 'Twitter Title',
      type: 'text',
    },

    {
      name: 'twitterDescription',
      title: 'Twitter Description',
      type: 'text',
    },

    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
    },

    {
      name: 'robotsIndex',
      title: 'Robots Index',
      type: 'boolean',
      initialValue: true,
    },

    {
      name: 'robotsFollow',
      title: 'Robots Follow',
      type: 'boolean',
      initialValue: true,
    },

    {
      name: 'structuredData',
      title: 'Structured Data',
      type: 'text',
    },

    {
      name: 'ogImageAlt',
      title: 'OG Image Alt',
      type: 'string',
    },
  ],
}
