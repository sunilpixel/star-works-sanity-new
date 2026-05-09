import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [
            defineField({
              name: 'name',
              title: 'Platform Name',
              type: 'string',
            }),

            defineField({
              name: 'href',
              title: 'URL',
              type: 'url',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'footerSections',
      title: 'Footer Sections',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),

            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',

              of: [
                {
                  type: 'object',

                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Name',
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
          ],
        },
      ],
    }),

    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: 'Star Works. All rights reserved.',
    }),
  ],
})
