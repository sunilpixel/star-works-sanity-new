import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'marqueeSection',
  title: 'Marquee Section',
  type: 'object',

  fields: [
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',

      of: [
        {
          type: 'string',
        },
      ],

      validation: (Rule) => Rule.min(1),
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Marquee Section',
      }
    },
  },
})
