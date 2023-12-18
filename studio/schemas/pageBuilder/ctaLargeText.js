import {defineField, defineType} from 'sanity'

export const ctaLargeTextType = defineType({
  type: 'object',
  name: 'ctaLargeText',
  title: 'CTA Large Text',
  fields: [
    defineField({
      type: 'text',
      name: 'largeText',
      title: 'Large Text',
      rows: 2
    }),    
    defineField({
      type: 'text',
      name: 'eyebrow',
      title: 'Eyebrow',
      rows: 2
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title'
    }),
    defineField({
      name: 'bodycopy',
      title: 'Bodycopy',
      type: 'array',
      of: [{
         type: 'block',
         styles: [
          {title: 'Normal', value: 'normal'},
        ],         
        marks: {
          decorators: [
          ],
        },
         lists: []
      }],
    }),    
    defineField({
      type: "object",
      name: "button",
      title: 'Button',
      fields: [
        { type: "string", name: "text" },
        {
          title: 'Link',
          name: 'href',
          type: 'url',
          validation: Rule => Rule.uri({
            scheme: ['http', 'https', 'mailto', 'tel']
          })
        },
      ]
    }),    
  ],
})
