// schemas/documents/faqPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',

  fields: [
    // HERO SECTION
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',

      fields: [
        defineField({
          name: 'tag',
          title: 'Tag',
          type: 'string',
          initialValue: '--FAQs',
        }),

        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'GET YOUR ANSWERS',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 5,
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'linkText',
          title: 'Link Text',
          type: 'string',
          initialValue: 'Contact us directly',
        }),

        defineField({
          name: 'link',
          title: 'Link',
          type: 'string',
          initialValue: '/contact-us',
        }),

        defineField({
          name: 'afterLinkText',
          title: 'After Link Text',
          type: 'string',
          initialValue: 'for personalized help.',
        }),
      ],
    }),

    // BROWSE CATEGORIES SECTION
    defineField({
      name: 'browseCategoriesSection',
      title: 'Browse Categories Section',
      type: 'object',

      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'allAnswersSection',
      title: 'All Answers Section',
      type: 'object',

      fields: [
        defineField({
          name: 'faqHeadingTag',
          title: 'FAQ Heading Tag',
          type: 'string',
          initialValue: '--FAQs',
        }),

        defineField({
          name: 'faqHeading',
          title: 'FAQ Heading',
          type: 'string',
          initialValue: 'GET YOUR ANSWERS',
        }),

        defineField({
          name: 'categories',
          title: 'Categories',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'id',
                  title: 'Category ID',
                  type: 'string',
                }),

                defineField({
                  name: 'label',
                  title: 'Category Label',
                  type: 'string',
                }),
              ],
            },
          ],
        }),

        defineField({
          name: 'faqGroups',
          title: 'FAQ Groups',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'categoryId',
                  title: 'Category ID',
                  type: 'string',
                }),

                defineField({
                  name: 'items',
                  title: 'FAQ Items',
                  type: 'array',

                  of: [
                    {
                      type: 'object',

                      fields: [
                        defineField({
                          name: 'question',
                          title: 'Question',
                          type: 'string',
                        }),

                        defineField({
                          name: 'answer',
                          title: 'Answer',
                          type: 'text',
                        }),
                      ],
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'FAQ Page',
      }
    },
  },
})
