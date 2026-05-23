import {defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Home Page',
  type: 'document',

  fields: [
    // =========================================
    // SEO
    // =========================================

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),

    // =========================================
    // HERO SECTION
    // =========================================

    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',

      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'animatedHeading',
          title: 'animatedHeading',
          type: 'string',
        }),
        defineField({
          name: 'lastHeading',
          title: 'lastHeading',
          type: 'string',
        }),
        defineField({
          name: 'Description',
          title: 'Description',
          type: 'text',
          rows: 12,
        }),
        defineField({
          name: 'heroVideo',
          title: 'Hero Video',
          type: 'file',

          options: {
            accept: 'video/mp4,video/webm',
          },
        }),

        defineField({
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // =========================================
    // MARQUEE SECTION
    // =========================================

    defineField({
      name: 'marqueeSection',
      title: 'Marquee Section',
      type: 'marqueeSection',
    }),

    // =========================================
    // ABOUT SECTION
    // =========================================

    defineField({
      name: 'aboutUsSection',
      title: 'About Us Section',
      type: 'object',

      fields: [
        // ====================================
        // SMALL HEADING
        // ====================================

        defineField({
          name: 'smallHeading',
          title: 'Small Heading',
          type: 'string',
          initialValue: '--ABOUT US',
        }),

        // ====================================
        // MAIN HEADING
        // ====================================

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'EVERYTHING',
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
        // IMAGE
        // ====================================

        defineField({
          name: 'image',
          title: 'Background Image',
          type: 'image',

          options: {
            hotspot: true,
          },
        }),

        // ====================================
        // STATS
        // ====================================

        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'number',
                }),

                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
              ],

              preview: {
                select: {
                  title: 'label',
                  subtitle: 'number',
                },
              },
            },
          ],

          validation: (Rule) => Rule.min(3).max(3),
        }),
      ],

      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    // ====================================
    // DELIVERABLE SECTION
    // ====================================

    defineField({
      name: 'deliverablesSection',
      title: 'Deliverables Section',
      type: 'deliverablesSection',
    }),

    // ====================================
    // OUR WORK SECTION
    // ====================================

    defineField({
      name: 'ourWorkSection',
      title: 'Our Work Section',
      type: 'object',

      fields: [
        // ====================================
        // SMALL HEADING
        // ====================================

        defineField({
          name: 'smallHeading',
          title: 'Small Heading',
          type: 'string',
          initialValue: '--OUR WORK',
        }),

        // ====================================
        // MAIN HEADING
        // ====================================

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'OUR LATEST PROJECTS',
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
        // PROJECTS
        // ====================================

        defineField({
          name: 'projects',
          title: 'Projects',
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
                  name: 'path',
                  title: 'Project Link',
                  type: 'string',
                  description: 'Example: /portfolio/project-name',
                }),

                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',

                  options: {
                    hotspot: true,
                  },
                }),

                defineField({
                  name: 'buttonText',
                  title: 'Button Text',
                  type: 'string',
                  initialValue: 'View Project',
                }),
              ],

              preview: {
                select: {
                  title: 'title',
                  media: 'image',
                },
              },
            },
          ],

          validation: (Rule) => Rule.min(3),
        }),

        // ====================================
        // CTA BUTTON
        // ====================================

        defineField({
          name: 'ctaButtonText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'View All Projects',
        }),

        defineField({
          name: 'ctaButtonLink',
          title: 'CTA Button Link',
          type: 'string',
          initialValue: '/portfolio',
        }),
      ],

      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    // ====================================
    // OUR SERVICE SECTION
    // ====================================

    defineField({
      name: 'ourServicesSection',
      title: 'Our Services Section',
      type: 'object',

      fields: [
        // ====================================
        // SMALL HEADING
        // ====================================

        defineField({
          name: 'smallHeading',
          title: 'Small Heading',
          type: 'string',
          initialValue: '--OUR SERVICES',
        }),

        // ====================================
        // MAIN HEADING
        // ====================================

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'We Provide Best Services',
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
        // SERVICES
        // ====================================

        defineField({
          name: 'slides',
          title: 'Slides',
          type: 'array',

          of: [{type: 'serviceCard'}],
        }),
      ],

      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    // ====================================
    // FEAtTURES SECTION
    // ====================================

    defineField({
      name: 'featuresSection',
      title: 'Features Section',
      type: 'featuresSection',
    }),

    // ====================================
    // FAQ SECTION
    // ====================================

    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'faqSection',
    }),

    // ====================================
    // CTA SECTION
    // ====================================

    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'ctaSection',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
})
