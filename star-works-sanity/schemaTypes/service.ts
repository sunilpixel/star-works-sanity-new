import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',

      of: [{type: 'block'}],
    }),

    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',

      options: {
        hotspot: true,
      },
    }),
  ],
})
