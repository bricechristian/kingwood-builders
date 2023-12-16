import {defineField, defineType} from 'sanity'

export const listType = defineType({
  type: 'object',
  name: 'list',
  title: 'List',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    })
  ],
})
