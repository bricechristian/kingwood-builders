import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Pages',
  icon: DocumentTextIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: `https://kingwoodbuilders.com/_______`,
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),   
    defineField({
        type: 'array',
        name: 'content',
        title: 'Page Builder',
        of: [
          defineArrayMember({type: 'hero'}),
          defineArrayMember({type: 'textHeadline'}),
          defineArrayMember({type: 'textImage'}),
          defineArrayMember({type: 'list'}),
          defineArrayMember({type: 'cards'}),
          defineArrayMember({type: 'team'}),
          defineArrayMember({type: 'steps'}),
          defineArrayMember({type: 'ctaLargeText'}),
          defineArrayMember({type: 'projectCarousel'})
        ]
    }),
    defineField({
      type: 'object',
      name: 'settings',
      fieldsets: [
        {
          name: 'seo', 
          title: 'SEO & Social Share',
          options: {
            collapsible: true, // Makes the whole fieldset collapsible
            collapsed: true, // Defines if the fieldset should be collapsed by default or not
            modal: {type: 'popover'} //Makes the modal type a popover
          }
        }
      ],
      fields: [
        {
          title: 'Title for SEO & Social Sharing',
          name: 'ogTitle',
          type: 'string',
          description:
          'Ideally this is kept between 15 and 70 characters',
          fieldset: 'seo',
          validation: Rule => Rule.min(15).max(70)
        },
        {
          title: 'Short paragraph for SEO & social sharing (meta description)',
          name: 'ogDescription',
          type: 'text',
          description:
          'Ideally this is kept between 70 and 160 characters',
          fieldset: 'seo',
          validation: Rule => Rule.min(70).max(160)
        },        
        {
          type: 'image',
          title: 'Social Sharing Image',
          name: 'ogImage',
          description:
            'Overrides global default image. Recommended Image Dimensions: 1200x630',
          fieldset: 'seo'
        },
        {
          title: 'Block Search indexing?',
          name: 'noindex',
          type: 'boolean',
          initialValue: false,
          description:
            'When enabled this page will not be "indexed" by search engines. In other words, the page will not be visible to search engines',          
          fieldset: 'seo'
        }        
      ]
    })    
  ],

  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
