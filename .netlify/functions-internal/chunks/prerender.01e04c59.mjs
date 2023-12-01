import { I as Is, $ as $$Layout, u as urlForImage } from './pages/404.astro.b9628f1d.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute, d as defineScriptVars } from './astro.2cf47c56.mjs';
/* empty css                          */import { $ as $$FeaturedProjects } from './pages/_...slug_.astro.a1b3ff47.mjs';

const $$Astro$2 = createAstro("https://kingwoodbuilders.com");
const prerender$2 = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const data = await Is().fetch(`
	*[_type=='page' && slug.current == "landing"][0] {
	..., 
	content[] {
		...
	}	
	}
`);
  const { content } = data;
  const featuredImage = content[0].images[0];
  return renderTemplate`

${renderComponent($$result, "Layout", $$Layout, { "title": data.settings.ogTitle, "description": data.settings.ogDescription, "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<section class="flex flex-col flex-grow astro-J7PV25F6">
		<div class="grid-layout flex-grow grid-rows-[auto_1fr] astro-J7PV25F6">
			<div class="pt-32 col-start-2 col-span-10 md_min:space-y-4 md:order-2 md:pt-0 md:-mt-12 astro-J7PV25F6">
				<h1 class="text-[clamp(40px,6.5vw,120px)] leading-[.9] relative z-20 md:pr-12 xs:pr-0 astro-J7PV25F6">
					<span class="block pt-16 -mt-16 astro-J7PV25F6" data-viewport="typography-shift" data-viewport-delay=".15">
						<span class="astro-J7PV25F6">Developing <span id="dreams" class="astro-J7PV25F6">dreams</span>
							<span class="font-medium astro-J7PV25F6">together.</span></span>
					</span>
				</h1>
				<p class="relative z-20 max-w-md mt-2 pr-12 shift-up sm:text-14 xs:text-[13px] sm:pr-8 astro-J7PV25F6" data-viewport="shift-up" data-viewport-delay=".25">
					Kingwood Builders is a custom builder and whole house remodeling company that specializes in fine craftsmanship work in Charleston, South Carolina and Wilmington, North Carolina. We utilize the latest building techniques with extensive research to build efficient, healthy, and long-lasting homes.
				</p>
				<div class="shift-up relative z-20 astro-J7PV25F6" data-viewport="shift-up" data-viewport-delay=".3">
					<a href="#" class="contact-trigger button mt-4 astro-J7PV25F6">Contact Us</a>
				</div>
			</div>
			<div class="absolute top-[180px] left-[7vw] w-[clamp(200px,30vw,30vw)] h-[clamp(200px,30vw,30vw)] rounded-full bg-[rgba(220,226,87,0.65)] blur-[60px] md:top-[120px] md:left-[5vw] fade-in astro-J7PV25F6">
			</div>
			<div class="relative overflow-hidden col-start-3 col-span-10 -mt-[340px] md:mt-0 md:order-1 md:min-h-[66vw] sm:min-h-[90vw] xs:min-h-[70vw] astro-J7PV25F6">
				<div class="grid grid-cols-10 w-full absolute z-20 bottom-20 right-6 sm:bottom-6 astro-J7PV25F6">
					<div class="col-start-10 astro-J7PV25F6">
						<div class="-rotate-90 origin-left relative astro-J7PV25F6">
							<div class="absolute top-full right-0 w-full font-medium text-20 whitespace-nowrap sm:text-14 astro-J7PV25F6" data-viewport="fade-in" data-viewport-delay=".25">
								Charleston, SC
							</div>
						</div>
					</div>
				</div>
				<picture data-viewport="fade-in" class="astro-J7PV25F6">
					<source${addAttribute(urlForImage(featuredImage.asset).width(1800).format("webp").quality(80).url(), "srcset")} type="image/webp" media="(min-width: 1200px)" class="astro-J7PV25F6">
					<source${addAttribute(urlForImage(featuredImage.asset).width(1200).format("webp").quality(80).url(), "srcset")} type="image/webp" media="(min-width: 768px)" class="astro-J7PV25F6">
					<source${addAttribute(urlForImage(featuredImage.asset).width(850).format("webp").quality(80).url(), "srcset")} type="image/webp" media="(min-width: 479px)" class="astro-J7PV25F6">
					<source${addAttribute(urlForImage(featuredImage.asset).width(650).format("webp").url(), "srcset")} type="image/webp" media="(max-width: 478px)" class="astro-J7PV25F6">
					<img${addAttribute(`w-full h-full object-cover absolute z-10 scale-in astro-J7PV25F6`, "class")} data-delay=".25"${addAttribute(urlForImage(featuredImage.asset).width(800).quality(80).url(), "src")} width="1920" height="1080"${addAttribute(featuredImage.alt, "alt")}${addAttribute(`${urlForImage(featuredImage.asset).width(800).quality(80).url()} 479w,
						${urlForImage(featuredImage.asset).width(1200).quality(80).url()} 768w,
						${urlForImage(featuredImage.asset).width(1800).quality(80).url()} 1200w`, "srcset")} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1400px, 1920px">
				</picture>
			</div>
		</div>
	</section>
` })}

`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/pages/index.astro");

const $$file$2 = "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/pages/index.astro";
const $$url$2 = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$2,
	prerender: prerender$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://kingwoodbuilders.com");
const prerender$1 = true;
async function getStaticPaths$1() {
  const data = await Is().fetch(`
    *[_type=='project'] {
      ...
    }
  `);
  let paths = [];
  data.map(({ slug }) => paths.push({ params: { slug: slug.current } }));
  return paths;
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const { slug } = Astro2.params;
  const data = await Is().fetch(`
*[_type=='project' && slug.current == '${slug}'][0] {
	...
}
`);
  if (!data)
    return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.title }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<section class="py-40">
		<div class="grid-layout text-center">
			<div class="grid-span-xl">
				<h1 class="typography-shift">
					<span>${data.title}</span>
				</h1>
			</div>
		</div>
	</section>
` })}`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/pages/projects/[...slug].astro");

const $$file$1 = "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/pages/projects/[...slug].astro";
const $$url$1 = "/projects/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$1,
	file: $$file$1,
	getStaticPaths: getStaticPaths$1,
	prerender: prerender$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://kingwoodbuilders.com");
const prerender = true;
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
  let previewResponse;
  let responseJSON;
  if (Astro2.url.search.includes("preview=true")) {
    previewResponse = await fetch(
      `https://kingwood-builders.netlify.app/.netlify/functions/preview?type=page&slug=${Astro2.params.slug}`
    );
    responseJSON = await previewResponse.json();
  }
  const { slug } = Astro2.params;
  const data = responseJSON === void 0 ? await Is().fetch(`
*[_type=='page' && slug.current == '${slug}'][0] {
	...,
	content[] {
		...,
        projects[]->
	}	
}
`) : responseJSON.data;
  console.log(Astro2.url);
  if (!data)
    return Astro2.redirect("/404");
  return renderTemplate(_a || (_a = __template(["", "\n\n<script>(function(){", "\n    console.log(data)\n    console.log(Astro)\n})();<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "noindex": data.settings?.noindex ? data.settings.noindex : false, "title": data.title }, { "default": ($$result2) => renderTemplate`${data.content?.map((section) => {
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
  })}` }), defineScriptVars({ data, Astro: Astro2 }));
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/pages/[...slug].astro");

const $$file = "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____slug_$1 as _, ____slug_ as a, index as i };
