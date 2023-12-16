import {defineField, defineType} from 'sanity'

export const ctaLargeTextType = defineType({
  type: 'object',
  name: 'ctaLargeText',
  title: 'CTA Large Text',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    })
  ],
})
