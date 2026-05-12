import {defineField, defineType} from 'sanity'
import {faqSection} from './objects/faqSection'
import {ctaSection} from './objects/ctaSection'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',

  fields: [
    // ====================================
    // TITLE
    // ====================================

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // ====================================
    // SLUG
    // ====================================

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // ====================================
    // HERO-SECTION
    // ====================================

    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',

      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),

        defineField({
          name: 'descriptionOne',
          title: 'Description One',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'descriptionTwo',
          title: 'Description Two',
          type: 'text',
          rows: 4,
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

    // ====================================
    // FEATURES SLIDER
    // ====================================

    defineField({
      name: 'featuresSection',
      title: 'Features Section',
      type: 'object',

      fields: [
        defineField({
          name: 'sectionHeading',
          title: 'Section Heading',
          type: 'string',
        }),

        defineField({
          name: 'slides',
          title: 'Slides',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'heading',
                  title: 'Heading',
                  type: 'string',
                }),

                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),

                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],

              preview: {
                select: {
                  title: 'heading',
                  media: 'image',
                },
              },
            },
          ],
        }),
      ],

      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    // ====================================
    // PROCESS SECTION
    // ====================================

    defineField({
      name: 'processSection',
      title: 'Process Section',
      type: 'object',

      fields: [
        // ====================================
        // SECTION HEADING
        // ====================================

        defineField({
          name: 'sectionHeading',
          title: 'Section Heading',
          type: 'string',
        }),

        // ====================================
        // CENTER IMAGE
        // ====================================

        defineField({
          name: 'centerImage',
          title: 'Center Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),

        // ====================================
        // PROCESS ITEMS
        // ====================================

        defineField({
          name: 'processCards',
          title: 'Process Cards',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                }),

                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),

                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),

                defineField({
                  name: 'align',
                  title: 'Align',
                  type: 'string',

                  options: {
                    list: [
                      {title: 'Left', value: 'left'},
                      {title: 'Center', value: 'center'},
                      {title: 'Right', value: 'right'},
                    ],

                    layout: 'radio',
                  },
                }),
              ],

              preview: {
                select: {
                  title: 'title',
                  subtitle: 'number',
                },
              },
            },
          ],
        }),
      ],

      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    // ====================================
    // TECHNOLOGIES SECTION
    // ====================================

    defineField({
      name: 'technologiesSection',
      title: 'Technologies Section',
      type: 'object',

      fields: [
        // ====================================
        // SECTION HEADING
        // ====================================

        defineField({
          name: 'sectionHeading',
          title: 'Section Heading',
          type: 'string',
        }),

        // ====================================
        // TECHNOLOGIES
        // ====================================

        defineField({
          name: 'technologies',
          title: 'Technologies',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),

                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',

                  options: {
                    hotspot: true,
                  },
                }),
              ],

              preview: {
                select: {
                  title: 'title',
                  media: 'image',
                },
              },
            },
          ],
        }),
      ],

      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    // ====================================
    // DELIVERABLE SECTION
    // ====================================

    defineField({
      name: 'deliverablesSection',
      title: 'Deliverables Section',
      type: 'object',

      fields: [
        // ====================================
        // SECTION HEADING
        // ====================================

        defineField({
          name: 'sectionHeading',
          title: 'Section Heading',
          type: 'string',
        }),

        // ====================================
        // DELIVERABLE ITEMS
        // ====================================

        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                }),

                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),

                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],

              preview: {
                select: {
                  title: 'title',
                  subtitle: 'number',
                },
              },
            },
          ],
        }),
      ],

      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    // ====================================
    // FAQ SECTION
    // ====================================

    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'faqSection',
    }),

    defineField({
      name: 'ctaSection',
      title: 'FAQ Section',
      type: 'ctaSection',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
    },
  },
})
