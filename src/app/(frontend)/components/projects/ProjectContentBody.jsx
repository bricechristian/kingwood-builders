const ProjectContentBody = ({ data }) => {
	const project = data;
	return (
		<section className="py-6">
			<div className="grid-layout">
				<div className="text-center col-start-2 col-span-10 md:col-start-2 md:col-span-8">
					<h1 className="headline-160">{project.title}</h1>
				</div>
			</div>
		</section>
	);
};

export default ProjectContentBody;
