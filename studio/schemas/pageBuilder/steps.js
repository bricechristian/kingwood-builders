import {defineField, defineType} from 'sanity'

export const stepsType = defineType({
  type: 'object',
  name: 'steps',
  title: 'Steps',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    })
  ],
})
