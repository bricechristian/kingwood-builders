"use client";

import { client } from "lib/sanity.client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

import Blob from "../../../../public/project-blob.svg";
import { useTextLineBreak } from "../hooks/useTextLineBreak";
import { Mousewheel, Autoplay } from "swiper";

const ProjectCarousel = ({ data }) => {
	const { projects } = data;
	// console.log(projects);
	return (
		<section
			key={data._key}
			className="py-6 relative md:min-h-[784px] md:relative">
			<div className="grid-layout">
				<div className="col-start-1 col-span-12 md:col-span-10">
					<Swiper
						className="-mt-32 pt-32"
						modules={[Mousewheel, Autoplay]}
						mousewheel={{ forceToAxis: true }}
						loop={true}
						onSwiper={(swiper) => console.log(swiper)}>
						{projects.map((item, index) => {
							const imageProps = useNextSanityImage(
								client,
								item.featuredImage
							);
							return (
								<SwiperSlide key={item._id} className="md:overflow-hidden">
									<Blob className="absolute z-10 -top-24 left-0 w-[60vw] md:w-[100vw] md:-left-32" />
									<div className="grid grid-cols-11 md:grid-cols-10 md:min-h-[750px]">
										<div className="col-start-2 col-span-2 -mr-[20vw] pt-32 md:mr-0 md:col-end-10">
											<div className="relative z-10 space-y-4">
												<h1 class="headline-160 max-w-lg sm:max-w-[260px]">
													{item.title}
												</h1>
												{item.description?.length ? (
													<div
														className="text-body-small max-w-[280px]"
														dangerouslySetInnerHTML={{
															__html: useTextLineBreak(
																item.description
															),
														}}
													/>
												) : (
													""
												)}
												{item.specs?.length ? (
													<div
														className="text-body-small max-w-[280px]"
														dangerouslySetInnerHTML={{
															__html: useTextLineBreak(
																item.specs
															),
														}}
													/>
												) : (
													""
												)}
												<div className="w-full h-0.5 bg-black dark:bg-white min-w-[83.25vw] !mt-10 md:min-w-[80vw]"></div>
												<Link
													href={`/projects/${item.slug.current}`}
													class="arrow-link !mt-10">
													View Project
												</Link>
											</div>
										</div>
										<div className="col-span-8 md:col-span-6 md:mt-0 md:absolute md:right-0 md:bottom-0 md:w-full md:h-full md:max-w-[100vw]">
											<div className="after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black dark:after:bg-white after:opacity-20 md:absolute md:bottom-0 md:right-0 md:after:opacity-100 md:after:bg-transparent md:after:bg-gradient-to-b md:after:h-2/3 md:from-neutral md:dark:from-black md:dark:to-transparent md_min:relative">
												<Image
													{...imageProps}
													alt={item.featuredImage.alt}
													priority={true}
													width={1500}
													height={1500}
													className="aspect-[11/12] object-cover md:aspect-square md_min:min-h-[900px] md_min:max-h-[calc(100vh_+_2rem)]"
													sizes="(max-width: 768px) 75vw, 66vw"
													quality={65}
												/>
											</div>
											<div className="headline-massive absolute z-10 bottom-8 right-[8.5vw] md:right-[10vw]">
												{index + 1 < 10 ? "0" : ""}
												{index + 1}
											</div>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default ProjectCarousel;
