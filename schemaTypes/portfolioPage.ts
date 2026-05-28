// schemas/portfolioPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioPage',
  title: 'Portfolio Page',
  type: 'document',

  fields: [
    // =========================================
    // SEO
    // =========================================

    {
      name: 'seo',
      type: 'seo',
    },
    // =========================================
    // HERO SECTION
    // =========================================
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',

      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
        }),

        defineField({
          name: 'headingOne',
          title: 'Heading One',
          type: 'string',
        }),

        defineField({
          name: 'headingTwo',
          title: 'Heading Two',
          type: 'string',
        }),

        defineField({
          name: 'lastDescription',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),
      ],
    }),

    // =========================================
    // PORTFOLIO SECTION
    // =========================================
    defineField({
      name: 'portfolioSection',
      title: 'Portfolio Section',
      type: 'object',

      fields: [
        defineField({
          name: 'searchPlaceholder',
          title: 'Search Placeholder',
          type: 'string',
          initialValue: 'What are you looking for...',
        }),

        defineField({
          name: 'tabs',
          title: 'Tabs',
          type: 'array',

          of: [
            {
              type: 'string',
            },
          ],
        }),

        defineField({
          name: 'projects',
          title: 'Projects',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'title',
                  title: 'Project Title',
                  type: 'string',
                }),

                defineField({
                  name: 'slug',
                  title: 'Slug',
                  type: 'slug',

                  options: {
                    source: 'title',
                    maxLength: 96,
                  },
                }),

                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 4,
                }),

                defineField({
                  name: 'image',
                  title: 'Project Image',
                  type: 'image',

                  options: {
                    hotspot: true,
                  },
                }),

                defineField({
                  name: 'projectLogo',
                  title: 'Project Logo',
                  type: 'image',

                  options: {
                    hotspot: true,
                  },
                }),

                defineField({
                  name: 'tech',
                  title: 'Technologies',
                  type: 'array',

                  of: [
                    {
                      type: 'string',
                    },
                  ],
                }),

                defineField({
                  name: 'buttonText',
                  title: 'Button Text',
                  type: 'string',
                  initialValue: 'VIEW PROJECT',
                }),

                defineField({
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // =========================================
    // CTA SECTION
    // =========================================
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',

      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
        }),

        defineField({
          name: 'headingOne',
          title: 'Heading One',
          type: 'string',
        }),

        defineField({
          name: 'headingTwo',
          title: 'Heading Two',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        }),

        defineField({
          name: 'contactButtonText',
          title: 'Primary Button Text',
          type: 'string',
        }),

        defineField({
          name: 'contactButtonLink',
          title: 'Primary Button Link',
          type: 'string',
        }),

        defineField({
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
        }),

        defineField({
          name: 'secondaryButtonLink',
          title: 'Secondary Button Link',
          type: 'string',
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Portfolio Page',
      }
    },
  },
})
