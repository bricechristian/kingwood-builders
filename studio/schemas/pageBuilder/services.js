import {defineField, defineType} from 'sanity'

export const servicesType = defineType({
  type: 'object',
  name: 'services',
  title: 'Services',
  fields: [
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
      name: 'listItems',
      title: 'List Items',
      type: 'array',      
      of: [
        {
          type: "object",
          name: "item",
          fields: [
            { type: "string", name: "title" },
            { type: "text", name: "content", rows: 3 },
            {
                name: "image",
                title: "Image",
                type: "image",
                description: "Recommended Image Dimensions: 508x960",
                fields: [
                  {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                  },
                ],
            }               
          ]
        }
      ],
    }),
    defineField({
      type: 'object',
      name: 'utilities',
      fieldsets: [
        {
          name: 'spacing', 
          title: 'Spacing',
          options: {
            collapsible: true, // Makes the whole fieldset collapsible
            collapsed: true, // Defines if the fieldset should be collapsed by default or not
          }
        }
      ],
      fields: [
        {
          title: 'Padding Top (px)',
          name: 'paddingTop',
          type: 'number',
          description:
          'Type a number between 0 and 200',
          fieldset: 'spacing',
          initialValue: 120,
          validation: Rule => Rule.min(0).max(200)
        },     
        {
          title: '[Tablet] Padding Top (px)',
          name: 'paddingTopTablet',
          type: 'number',
          description:
          'Type a number between 0 and 200',
          fieldset: 'spacing',
          initialValue: 60,
          validation: Rule => Rule.min(0).max(200)
        },     
        {
          title: '[Mobile] Padding Top (px)',
          name: 'paddingTopMobile',
          type: 'number',
          description:
          'Type a number between 0 and 200',
          fieldset: 'spacing',
          initialValue: 60,
          validation: Rule => Rule.min(0).max(200)
        },     
        {
          title: 'Padding Bottom (px)',
          name: 'paddingBottom',
          type: 'number',
          description:
          'Type a number between 0 and 200',
          fieldset: 'spacing',
          initialValue: 120,
          validation: Rule => Rule.min(0).max(200)
        },     
        {
          title: '[Tablet] Padding Bottom (px)',
          name: 'paddingBottomTablet',
          type: 'number',
          description:
          'Type a number between 0 and 200',
          fieldset: 'spacing',
          initialValue: 60,
          validation: Rule => Rule.min(0).max(200)
        },     
        {
          title: '[Mobile] Padding Bottom (px)',
          name: 'paddingBottomMobile',
          type: 'number',
          description:
          'Type a number between 0 and 200',
          fieldset: 'spacing',
          initialValue: 60,
          validation: Rule => Rule.min(0).max(200)
        },     
      ]
    })           
  ],
})
