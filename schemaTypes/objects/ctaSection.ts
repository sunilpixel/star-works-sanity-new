// objects/ctaSection.ts

import {defineField, defineType} from 'sanity'

export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',

  fields: [
    // ====================================
    // SECTION TITLE
    // ====================================

    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'GET STARTED',
    }),

    // ====================================
    // HEADING LINE 1
    // ====================================

    defineField({
      name: 'headingOne',
      title: 'Heading One',
      type: 'string',
    }),

    // ====================================
    // HEADING LINE 2
    // ====================================

    defineField({
      name: 'headingTwo',
      title: 'Heading Two',
      type: 'string',
    }),

    // ====================================
    // DESCRIPTION
    // ====================================

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    // ====================================
    // CONTACT BUTTON TEXT
    // ====================================

    defineField({
      name: 'contactButtonText',
      title: 'Contact Button Text',
      type: 'string',
      initialValue: 'Contact Us',
    }),

    // ====================================
    // CONTACT BUTTON LINK
    // ====================================

    defineField({
      name: 'contactButtonLink',
      title: 'Contact Button Link',
      type: 'string',
      initialValue: '/contact-us',
    }),

    // ====================================
    // SECOND BUTTON TEXT
    // ====================================

    defineField({
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'View Work',
    }),

    // ====================================
    // SECOND BUTTON LINK
    // ====================================

    defineField({
      name: 'secondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string',
      initialValue: '/services',
    }),
  ],

  options: {
    collapsible: true,
    collapsed: false,
  },

  preview: {
    select: {
      title: 'headingOne',
      subtitle: 'sectionTitle',
    },
  },
})
