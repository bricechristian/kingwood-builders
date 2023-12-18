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
    }),
    defineField({
      name: 'cardItems',
      title: 'Card Items',
      type: 'array',      
      of: [
        {
          type: "object",
          name: "item",
          fields: [
            { type: "string", name: "title" },
            { type: "text", name: "description", rows: 2 },
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
  ],
})
