import {defineField, defineType} from 'sanity'

export const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',

  fields: [
    // ====================================
    // SECTION TAG
    // ====================================

    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      initialValue: 'FAQ',
    }),

    // ====================================
    // SECTION HEADING
    // ====================================

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),

    // ====================================
    // BUTTON TEXT
    // ====================================

    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'View All FAQs',
    }),

    // ====================================
    // BUTTON LINK
    // ====================================

    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      initialValue: '/faq',
    }),

    // ====================================
    // FAQ ITEMS
    // ====================================

    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [
            defineField({
              name: 'title',
              title: 'Question',
              type: 'string',
            }),

            defineField({
              name: 'desc',
              title: 'Answer',
              type: 'text',
            }),
          ],

          preview: {
            select: {
              title: 'title',
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
})
