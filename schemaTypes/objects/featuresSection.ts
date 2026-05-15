import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuresSection',
  title: 'Features Section',
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
    // SLIDES
    // ====================================

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

  preview: {
    prepare() {
      return {
        title: 'Features Section',
      }
    },
  },
})
