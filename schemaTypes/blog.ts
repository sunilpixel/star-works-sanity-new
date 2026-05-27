import {defineField, defineType} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',

  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),

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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // AUTHOR
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',

      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },

        {
          name: 'role',
          title: 'Role',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'content',
      title: 'Content',

      type: 'array',

      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
})
