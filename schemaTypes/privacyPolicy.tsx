import {defineField, defineType} from 'sanity'

export const privacyPolicy = defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',

  icon: () => '🔒',

  fields: [
    // =========================================
    // SEO
    // =========================================

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',

      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'PRIVACY POLICY',
        }),

        defineField({
          name: 'headingOne',
          title: 'Heading One',
          type: 'string',
          initialValue: 'Your Privacy',
        }),

        defineField({
          name: 'headingTwo',
          title: 'Heading Two',
          type: 'string',
          initialValue: 'Matters',
        }),

        defineField({
          name: 'lastUpdated',
          title: 'Last Updated',
          type: 'date',
        }),
      ],
    }),

    // Rich Text Content
    defineField({
      name: 'content',
      title: 'Privacy Policy Content',
      type: 'array',

      of: [
        {
          type: 'block',

          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],

          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Number', value: 'number'},
          ],

          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],

            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',

                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                  }),
                ],
              },
            ],
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'hero.sectionTitle',
    },
  },
})
