import { defineField, defineType } from "sanity";

export default defineType({
	name: "project",
	title: "Projects",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			description: `${
				process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
			}/projects/_______`,
			validation: (Rule) => Rule.required(),
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "location",
			title: "Location",
			type: "string",
		}),    
		defineField({
			name: "date",
			title: "Date",
			type: "date",
		}),    
		defineField({
			name: "description",
			title: "Description",
			type: "text",
      rows: 4
		}),
		defineField({
			name: "specs",
			title: "Specs",
			type: "text",
      rows: 4,
      description: "Type each new spec on its own line.",
		}),
		defineField({
			name: "featuredImage",
			title: "Featured Image",
			type: "image",
			validation: (Rule) => Rule.required(),
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
				},
			],
		}),
		defineField({
			name: "images",
			type: "array",
			title: "Images",
			validation: (Rule) => Rule.required(),
			of: [
				{
					name: "image",
					type: "image",
					title: "Image",
					fields: [
						{
							name: "alt",
							type: "string",
							title: "Alternative text",
						},
					],
				},
			],
			options: {
				layout: "grid",
			},
		}),
		defineField({
			type: "object",
			name: "settings",
			fieldsets: [
				{
					name: "seo",
					title: "SEO & Social Share",
					options: {
						collapsible: true, // Makes the whole fieldset collapsible
						collapsed: true, // Defines if the fieldset should be collapsed by default or not
						modal: { type: "popover" }, //Makes the modal type a popover
					},
				},
			],
			fields: [
				{
					title: "Title for SEO & Social Sharing",
					name: "ogTitle",
					type: "string",
					description:
						"Ideally this is kept between 15 and 70 characters",
					fieldset: "seo",
					validation: (Rule) => Rule.min(15).max(70),
				},
				{
					title: "Short paragraph for SEO & social sharing (meta description)",
					name: "ogDescription",
					type: "text",
					description:
						"Ideally this is kept between 70 and 160 characters",
					fieldset: "seo",
					validation: (Rule) => Rule.min(70).max(160),
				},
				{
					type: "image",
					title: "Social Sharing Image",
					name: "ogImage",
					description:
						"Overrides global default image. Recommended Image Dimensions: 1200x630",
					fieldset: "seo",
				},
			],
		}),
	],

	preview: {
		select: {
			title: "title",
			media: "mainImage",
		},
		prepare(selection) {
			return { ...selection };
		},
	},
});
