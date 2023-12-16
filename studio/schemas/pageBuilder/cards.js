import {defineField, defineType} from 'sanity'

export const cardsType = defineType({
  type: 'object',
  name: 'cards',
  title: 'Cards',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    })
  ],
})
