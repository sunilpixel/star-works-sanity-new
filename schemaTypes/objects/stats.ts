// schemas/common/stats.ts

import {defineField, defineType} from 'sanity'

export const statItem = defineType({
  name: 'statItem',
  title: 'Stat Item',
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
})

export const statsSection = defineField({
  name: 'stats',
  title: 'Stats',
  type: 'array',

  of: [{type: 'statItem'}],

  validation: (Rule) => Rule.min(4).max(4),
})
