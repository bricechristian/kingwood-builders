import Hero from "../../components/Hero";
import TextHeadline from "../../components/TextHeadline";
import Header from "../Header";

const PageContentBody = ({ data }) => {
	// console.log(data)
	return (
		<>
			<Header />
			{data.content.map((section) => {
				switch (section._type) {
					case "hero":
						return <Hero data={section} />;
					case "textHeadline":
						return <TextHeadline data={section} />;
				}
			})}
		</>
	);
};

export default PageContentBody;
