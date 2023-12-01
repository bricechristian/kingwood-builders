import { u as urlForImage, I as Is, $ as $$Layout } from './404.astro.b9628f1d.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, b as addAttribute, u as unescapeHTML, F as Fragment } from '../astro.2cf47c56.mjs';
/* empty css                               */
const $$Astro$1 = createAstro("https://kingwoodbuilders.com");
const $$FeaturedProjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedProjects;
  const { projects } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="featured-projects splide">
	<div class="featured-projects__container">
		<div class="featured-projects__blur" data-viewport="fade-in"></div>
		<div class="splide__track">
			<ul class="splide__list">
				${projects.map((project, index) => {
    return renderTemplate`<li class="featured-projects__item splide__slide">
								<div class="featured-projects__item--grid grid-layout">
									<div class="featured-projects__item-grid--text">
										<div class="md_min:space-y-2">
											<h1 data-viewport="typography-shift">
												<span>${project.title}</span>
											</h1>
											${project.description?.length ? renderTemplate`<div class="rte" data-viewport="shift-up" data-viewport-delay=".15">
													${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(project.description.split("\n").join("<br />"))}` })}
												</div>` : ""}
											${project.specs?.length ? renderTemplate`<div class="rte" data-viewport="shift-up" data-viewport-delay=".30">
													${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(project.specs.split("\n").join("<br />"))}` })}
												</div>` : ""}
											<div class="!mt-6" data-viewport="shift-up" data-viewport-delay=".5">
												<a href="#" class="button">View Project</a>
											</div>
										</div>
										<div class="flex-grow flex pt-4 md_min:py-8 md_min:items-end">
											<div class="md_min:space-y-1">
												${project.date?.length ? renderTemplate`<div class="caps" data-viewport="shift-up" data-viewport-delay=".6">
														${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(
      project.date
    )}` })}
													</div>` : ""}
												${project.location?.length ? renderTemplate`<div class="caps" data-viewport="shift-up" data-viewport-delay=".6">
														${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(
      project.location
    )}` })}
													</div>` : ""}
											</div>
										</div>
									</div>
									<div class="featured-projects__item-grid--image">
										${project.featuredImage ? renderTemplate`<picture data-viewport="fade-in" data-viewport-delay=".45">
												<source${addAttribute(urlForImage(
      project.featuredImage.asset
    ).width(1800).format("webp").quality(80).url(), "srcset")} type="image/webp" media="(min-width: 1200px)">
												<source${addAttribute(urlForImage(
      project.featuredImage.asset
    ).width(1200).format("webp").quality(80).url(), "srcset")} type="image/webp" media="(min-width: 768px)">
												<source${addAttribute(urlForImage(
      project.featuredImage.asset
    ).width(850).format("webp").quality(80).url(), "srcset")} type="image/webp" media="(min-width: 479px)">
												<source${addAttribute(urlForImage(
      project.featuredImage.asset
    ).width(650).format("webp").url(), "srcset")} type="image/webp" media="(max-width: 478px)">
												<img${addAttribute(`w-full h-full object-cover absolute z-10 scale-in`, "class")} data-delay=".25"${addAttribute(urlForImage(
      project.featuredImage.asset
    ).width(800).quality(80).url(), "src")} width="1920" height="1080"${addAttribute(
      project.featuredImage.alt,
      "alt"
    )}${addAttribute(`${urlForImage(
      project.featuredImage.asset
    ).width(800).quality(80).url()} 479w,
                                                ${urlForImage(
      project.featuredImage.asset
    ).width(1200).quality(80).url()} 768w,
                                                ${urlForImage(
      project.featuredImage.asset
    ).width(1800).quality(80).url()} 1200w`, "srcset")} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1400px, 1920px">
											</picture>` : ""}
									</div>
								</div>
							</li>`;
  })}
			</ul>
		</div>
		<div class="featured-projects__index grid-layout">
			<div class="featured-projects__index--text">
				<span>01/</span>
				<span>${`${projects.length < 10 ? "0" : projects.length}${projects.length}`}</span>
			</div>
		</div>
	</div>
</section>`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/components/FeaturedProjects.astro");

const $$Astro = createAstro("https://kingwoodbuilders.com");
async function getStaticPaths() {
  const data = await Is().fetch(`
    *[_type=='page'] {
      ...
    }
  `);
  let paths = [];
  data.map(({ slug }) => paths.push({ params: { slug: slug.current } }));
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  let previewResponse = await fetch(
    `https://kingwood-builders.netlify.app/.netlify/functions/preview?type=page&slug=${Astro2.params.slug}`
  );
  let responseJSON = await previewResponse.json();
  Astro2.params;
  const data = responseJSON.data;
  if (!data)
    return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "noindex": true, "title": data.title }, { "default": ($$result2) => renderTemplate`${data.content?.map((section) => {
    switch (section._type) {
      case "projectCarousel":
        return renderTemplate`${renderComponent($$result2, "FeaturedProjects", $$FeaturedProjects, { "projects": section.projects })}`;
      case "textHeadline":
        return renderTemplate`${maybeRenderHead($$result2)}<section class="py-40">
                            <div class="grid-layout text-center">
                                <div class="grid-span-xl">
                                    <h1 class="justify-center" data-viewport="typography-shift">
                                        <span>${section.title}</span>
                                    </h1>
                                </div>
                            </div>
                        </section>`;
      default:
        return renderTemplate`<section class="py-40">
                            <div class="grid-layout text-center">
                                <div class="grid-span-xl">
                                    <h1 class="justify-center" data-viewport="typography-shift">
                                        <span>${data.title}</span>
                                    </h1>
                                </div>
                            </div>
                        </section>`;
    }
  })}` })}`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/pages/preview/[...slug].astro");

const $$file = "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/pages/preview/[...slug].astro";
const $$url = "/preview/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FeaturedProjects as $, ____slug_ as _ };
