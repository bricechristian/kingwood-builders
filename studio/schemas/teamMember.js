import { UsersIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  icon: UsersIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        type: 'string',
        name: 'role',
        title: 'Role',
        validation: (rule) => rule.required(),
    }),      
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
})