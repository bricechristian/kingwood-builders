import {defineField, defineType} from 'sanity'

export const projectCarouselType = defineType({
  type: 'object',
  name: 'projectCarousel',
  title: 'Project Carousel',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required(),
      description: "Used for naming purposes"
    }),
    defineField({
      name: 'projects',
      type: 'array',
      title: 'Projects',
      validation: Rule => Rule.required(),
      of: [{type: 'reference', to: {type: 'project'}}],
    }),
  ],
})
