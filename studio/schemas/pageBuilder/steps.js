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
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',      
      of: [
        {
          type: "object",
          name: "step",
          fields: [
            { type: "string", name: "title" },
            { type: "text", name: "content", rows: 3 },
            {
              name: "image",
              title: "Image",
              type: "image",
              description: "Recommended Image Dimensions: 1234x727",
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
