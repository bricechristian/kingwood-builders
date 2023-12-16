import Iframe from "sanity-plugin-iframe-pane";

const getPreviewURL = (doc) => {
	// console.log(doc)
	return doc?.slug?.current
		? `https://kingwoodbuilders.com/preview/${doc.slug.current}`
		: `https://kingwoodbuilders.com`;
};

export const adminStructure = (S) =>
	S.list()
		.title("Content")
		.items([
			S.documentTypeListItem("page"),
			S.divider(),
			S.documentTypeListItem("project"),
			S.divider(),
			S.documentTypeListItem("teamMember")
				.title("Team"),
			S.divider(),
			S.documentTypeListItem("post"),
			S.documentTypeListItem("author"),
			S.divider(),
			S.documentTypeListItem("menu"),
			S.divider(),
			S.listItem()
				.title("Site Settings")
				.child(S.document().schemaType("global").documentId("global"))			
		]);

export const defaultDocumentNode = (S, { schemaType }) => {
	// console.log(S)
	if (schemaType == "page") {
		return S.document().views([
			S.view.form(),
			S.view
				.component(Iframe)
				.options({
					// Required: Accepts an async function
					// OR a string
					url: (doc) => getPreviewURL(doc),
					defaultSize: `desktop`,
					reload: {
						button: true, //  default `undefined`
					},
				})
				.title("Preview"),
		]);
	}
};