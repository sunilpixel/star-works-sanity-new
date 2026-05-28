import {defineField, defineType} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',

  fields: [
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),

    // TITLE
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),

    // SLUG
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),

    // EXCERPT
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),

    // CATEGORY
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    // TAGS
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // PUBLISHED AT
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),

    // MAIN IMAGE
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    }),

    // AUTHOR
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        {name: 'name', title: 'Name', type: 'string'},
        {name: 'role', title: 'Role', type: 'string'},
      ],
    }),

    // CONTENT — string type stores markdown properly
    defineField({
      name: 'content',
      title: 'Content (Markdown)',
      type: 'string',
    }),

    // AI GENERATED FLAG
    defineField({
      name: 'aiGenerated',
      title: 'AI Generated',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
})
