import {defineField, defineType} from 'sanity'

export const textImageType = defineType({
  type: 'object',
  name: 'textImage',
  title: 'Text/Image',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    })
  ],
})
