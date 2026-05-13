import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',

  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
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
              name: 'href',
              title: 'Href',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Get In Touch',
    }),

    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      initialValue: '/contact-us',
    }),
  ],
})
