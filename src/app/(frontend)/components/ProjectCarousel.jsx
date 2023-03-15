"use client";

import { client } from "lib/sanity.client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";
import Blob from "../../../../public/project-blob.svg";

const ProjectCarousel = ({ data }) => {
	const { projects } = data;
	console.log(projects);
	return (
		<section
			key={data._key}
			className="py-6 relative md:min-h-[450px] md:relative">
			<div className="grid-layout">
				<Blob className="absolute z-10 -top-32 left-0 w-[60vw] md:w-[100vw] md:-left-32" />
				<div className="col-start-2 col-span-11 md:col-start-2 md:col-span-9">
					{/* <h1 class="headline-160">{data.title}</h1> */}
					{projects.map((item, index) => {
						const imageProps = useNextSanityImage(
							client,
							item.featuredImage
						);
						return (
							<div key={item._id} className="">
								<div className="grid grid-cols-11 md:grid-cols-9">
									<div className="col-span-3 -mr-[20vw] md:-mr-[32vw]">
										<div className="max-w-lg relative z-10 space-y-4">
											<h1 class="headline-160">
												{item.title}
											</h1>
											<Link
												href={`/projects/${item.slug.current}`}
												class="arrow-link">
												View Project
											</Link>
										</div>
									</div>
									<div className="col-span-8 -mt-32 md:col-span-6 md:mt-0 md:absolute md:right-0 md:bottom-0 md:w-full md:max-w-[80vw] md:h-full">
										<div className="after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-20 md:absolute md:bottom-0 md:right-0 md_min:relative">
											<Image
												{...imageProps}
												alt={item.featuredImage.alt}
												priority={true}
												width={1920}
												height={1080}
												className=""
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1400px, 1920px"
											/>
										</div>
										<div className="headline-massive text-white absolute z-10 bottom-[4vw] right-[8.5vw] md:right-[10vw]">
											{index + 1 < 10 ? "0" : ""}
											{index + 1}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProjectCarousel;
