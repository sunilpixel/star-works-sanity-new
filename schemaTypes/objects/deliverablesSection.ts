import {defineField, defineType} from 'sanity'

export default defineType({
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
              name: 'prevNumber',
              title: 'Previous Number',
              type: 'string',
            }),

            defineField({
              name: 'nextNumber',
              title: 'Next Number',
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
              prevNumber: 'prevNumber',
              nextNumber: 'nextNumber',
            },

            prepare({title, prevNumber, nextNumber}) {
              return {
                title,
                subtitle: `${prevNumber || ''} ${nextNumber || ''}`,
              }
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

  preview: {
    prepare() {
      return {
        title: 'Deliverables Section',
      }
    },
  },
})
