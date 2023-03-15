"use client";

import { usePreview } from "../../../../../lib/sanity.preview";
import ProjectContentBody from "./ProjectContentBody";

const PreviewProjectContent = ({ query, queryParams }) => {
	const data = usePreview(null, query, queryParams);
	return (
        <ProjectContentBody data={data} />
	);
};

export default PreviewProjectContent;
