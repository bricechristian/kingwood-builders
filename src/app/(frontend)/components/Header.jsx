
import Link from "next/link";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";

import DarkModeToggle from "./darkModeToggle";
import HamburgerDiamond from "../../../../public/hamburger-diamond.svg";
import Wordmark from "../../../../public/wordmark.svg";

const query = groq`
*[_type=='menu' && slug.current=='main-menu'][0] {
    menuItems[]{
        _key,
        link {
            externalLink,
            external_link,
            internal_link {
                "data": *[_id == ^._ref] {
                    _type,
                    slug,
                    title
                }
            }    
        },
        name
    }
}
`;

const Header = async () => {
	const nav = await client.fetch(query);
	// console.log(nav);
	return (
		<header className="py-4 relative z-50">
			<nav className="grid-layout">
				<div className="col-start-2 -ml-12 md:-ml-6">
					<Link href="/" className="headline-60">
						Logo
						{/* <Wordmark className="w-[49px] h-[42px]" /> */}
					</Link>
				</div>
				<ul className="col-start-11 flex justify-end gap-6 -mr-12 md:-mr-10 md:col-start-9 sm:-mr-8">
					<li className="headline-60 flex items-center">
						<span class="mr-2">
							<DarkModeToggle />
						</span>
						<span>MENU</span>
					</li>
					{/* {nav.menuItems.map((item) => {
							return (
								<li key={item._key}>
									{item.link?.externalLink ? (
										<Link
											href={item.link.external_link}
											target="_blank">
											{item.name}
										</Link>
									) : item.link.internal_link.data[0]
											._type === "project" ? (
										<Link
											href={`/projects/${item.link.internal_link?.data[0].slug.current}`}>
											{item.name}
										</Link>
									) : (
										<Link
											href={`/${item.link.internal_link?.data[0].slug.current}`}>
											{item.name}
										</Link>
									)}
								</li>
							);
						})} */}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
