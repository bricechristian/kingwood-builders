import {defineField, defineType} from 'sanity'

export const teamType = defineType({
  type: 'object',
  name: 'team',
  title: 'Team',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),  
    defineField({
        name: 'team',
        type: 'array',
        title: 'Team Members',
        validation: Rule => Rule.required(),
        of: [{type: 'reference', to: {type: 'teamMember'}}],
      }), 
  ],
})
