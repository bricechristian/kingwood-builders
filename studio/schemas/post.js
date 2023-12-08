import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import authorType from './author'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'post',
  title: 'Blog Post',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: authorType.name }],
    }),
    defineField({
        type: 'object',
        name: 'settings',
        fieldsets: [
          {
            name: 'seo', 
            title: 'SEO & Social Share',
            options: {
              collapsible: true, // Makes the whole fieldset collapsible
              collapsed: true, // Defines if the fieldset should be collapsed by default or not
              modal: {type: 'popover'} //Makes the modal type a popover
            }
          }
        ],
        fields: [
          {
            title: 'Title for SEO & Social Sharing',
            name: 'ogTitle',
            type: 'string',
            description:
            'Ideally this is kept between 15 and 70 characters',
            fieldset: 'seo',
            validation: Rule => Rule.min(15).max(70)
          },
          {
            title: 'Short paragraph for SEO & social sharing (meta description)',
            name: 'ogDescription',
            type: 'text',
            description:
            'Ideally this is kept between 70 and 160 characters',
            fieldset: 'seo',
            validation: Rule => Rule.min(70).max(160)
          },        
          {
            type: 'image',
            title: 'Social Sharing Image',
            name: 'ogImage',
            description:
              'Overrides global default image. Recommended Image Dimensions: 1200x630',
            fieldset: 'seo'
          }       
        ]
      })       
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})