import Hero from "../../components/Hero";
import TextHeadline from "../../components/TextHeadline";
import ProjectCarousel from "../../components/ProjectCarousel";
import Header from "../Header";

const HomeContentBody = ({data}) => {
    return ( 
        <>
            <Header />
            {data.content.map(section => {
                switch (section._type) {
                    case "hero":    
                        return <Hero data={section} />
                    case "textHeadline":   
                        return <TextHeadline data={section} />
                    case "projectCarousel":   
                        return <ProjectCarousel data={section} />
                } 
            })}
        </>
     );
}
 
export default HomeContentBody;