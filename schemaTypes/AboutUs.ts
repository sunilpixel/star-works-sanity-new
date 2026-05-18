import {defineField, defineType} from 'sanity'
import {statsSection} from './objects/stats'

export const aboutUs = defineType({
  name: 'aboutUs',
  title: 'About Us',
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
          initialValue: 'ABOUT ERATECH',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Transforming ideas into digital reality since 2018. We are a team of passionate',
        }),
      ],
    }),

    // =========================================
    // ABOUT SECTION
    // =========================================

    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',

      fields: [
        defineField({
          name: 'smallHeading',
          title: 'Small Heading',
          type: 'string',
          initialValue: 'ABOUT US',
        }),

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'WHERE IT ALL BEGAN',
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
          name: 'descriptions',
          title: 'Descriptions',
          type: 'array',

          of: [
            {
              type: 'text',
            },
          ],
        }),
      ],
    }),

    // =========================================
    // ACHIEVEMENTS SECTION
    // =========================================

    defineField({
      name: 'achievementsSection',
      title: 'Achievements Section',
      type: 'object',

      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Our Achievements',
        }),

        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Numbers that speak for themselves',
        }),

        // ====================================
        // STATS ITEMS
        // ====================================

        statsSection,

        defineField({
          name: 'visionMission',
          title: 'Vision & Mission',
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
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 4,
                }),
              ],

              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
        }),

        // ====================================
        // CORE VALUES
        // ====================================

        defineField({
          name: 'coreValuesSection',
          title: 'Core Values Section',
          type: 'object',

          fields: [
            defineField({
              name: 'smallHeading',
              title: 'Small Heading',
              type: 'string',
              initialValue: 'CORE VALUES',
            }),

            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              initialValue: 'WHAT DRIVES US FORWARD',
            }),

            defineField({
              name: 'cards',
              title: 'Cards',
              type: 'array',

              of: [
                {
                  type: 'object',

                  fields: [
                    defineField({
                      name: 'icon',
                      title: 'Icon',
                      type: 'image',

                      options: {
                        hotspot: true,
                      },
                    }),

                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    }),

                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                      rows: 3,
                    }),
                  ],

                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'description',
                      media: 'icon',
                    },
                  },
                },
              ],
            }),
          ],
        }),

        // ====================================
        // MEET THE TEAM
        // ====================================

        defineField({
          name: 'teamSection',
          title: 'Team Section',
          type: 'object',

          fields: [
            defineField({
              name: 'smallHeading',
              title: 'Small Heading',
              type: 'string',
              initialValue: 'MEET THE TEAM',
            }),

            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              initialValue: 'BRILLIANT MINDS',
            }),

            defineField({
              name: 'members',
              title: 'Members',
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
                      name: 'role',
                      title: 'Role',
                      type: 'string',
                    }),

                    defineField({
                      name: 'image',
                      title: 'Image',
                      type: 'image',

                      options: {
                        hotspot: true,
                      },
                    }),
                  ],

                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'role',
                      media: 'image',
                    },
                  },
                },
              ],
            }),
          ],
        }),

        // ====================================
        // TIMELINE SECTION
        // ====================================

        defineField({
          name: 'timelineSection',
          title: 'Timeline Section',
          type: 'object',

          fields: [
            defineField({
              name: 'smallHeading',
              title: 'Small Heading',
              type: 'string',
              initialValue: 'OUR JOURNEY',
            }),

            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              initialValue: 'MILESTONES & ACHIEVEMENTS',
            }),

            defineField({
              name: 'timelineItems',
              title: 'Timeline Items',
              type: 'array',

              of: [
                {
                  type: 'object',

                  fields: [
                    defineField({
                      name: 'year',
                      title: 'Year',
                      type: 'string',
                    }),

                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    }),

                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                      rows: 4,
                    }),

                    defineField({
                      name: 'image',
                      title: 'Image',
                      type: 'image',

                      options: {
                        hotspot: true,
                      },
                    }),
                  ],

                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'year',
                      media: 'image',
                    },
                  },
                },
              ],
            }),
          ],
        }),

        // ====================================
        // WHY CHOOSE US SECTION
        // ====================================

        defineField({
          name: 'whyChooseUsSection',
          title: 'Why Choose Us Section',
          type: 'object',

          fields: [
            defineField({
              name: 'smallHeading',
              title: 'Small Heading',
              type: 'string',
              initialValue: 'WHY CHOOSE US',
            }),

            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              initialValue: 'PARTNER WITH THE BEST',
            }),

            defineField({
              name: 'cards',
              title: 'Cards',
              type: 'array',

              of: [
                {
                  type: 'object',

                  fields: [
                    defineField({
                      name: 'icon',
                      title: 'Icon',
                      type: 'image',

                      options: {
                        hotspot: true,
                      },
                    }),

                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    }),

                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                      rows: 4,
                    }),
                  ],

                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'description',
                      media: 'icon',
                    },
                  },
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'About Us',
      }
    },
  },
})
