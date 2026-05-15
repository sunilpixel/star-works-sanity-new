import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services Page',
  type: 'document',

  fields: [
    // ====================================
    // HERO SECTION
    // ====================================

    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',

      fields: [
        defineField({
          name: 'smallHeading',
          title: 'Small Heading',
          type: 'string',
          initialValue: '--ALL SERVICES',
        }),

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'COMPLETE DIGITAL SOLUTIONS',
        }),

        defineField({
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',

          options: {
            hotspot: true,
          },
        }),
      ],

      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    defineField({
      name: 'marqueeSection',
      title: 'Marquee Section',
      type: 'marqueeSection',
    }),

    defineField({
      name: 'exploreSection',
      title: 'Explore Section',
      type: 'object',

      fields: [
        // ====================================
        // HEADING
        // ====================================

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'explore Our complete Range',
        }),

        // ====================================
        // DESCRIPTION
        // ====================================

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),

        // ====================================
        // SLIDES
        // ====================================
        defineField({
          name: 'slides',
          title: 'Slides',
          type: 'array',

          of: [{type: 'serviceCard'}],
        }),
      ],

      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    defineField({
      name: 'statsSection',
      title: 'Stats Section',
      type: 'object',

      fields: [
        // ====================================
        // STATS ITEMS
        // ====================================

        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'number',
                  validation: (Rule) => Rule.required(),
                }),

                defineField({
                  name: 'suffix',
                  title: 'Suffix',
                  type: 'string',
                  description: 'Example: + , /7',
                }),

                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],

              preview: {
                select: {
                  title: 'title',
                  number: 'number',
                  suffix: 'suffix',
                },

                prepare({title, number, suffix}) {
                  return {
                    title,
                    subtitle: `${number}${suffix || ''}`,
                  }
                },
              },
            },
          ],

          validation: (Rule) => Rule.min(4).max(4),
        }),
      ],

      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'ctaSection',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Services Page',
      }
    },
  },
})
