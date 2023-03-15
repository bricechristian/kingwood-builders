import Hero from "../../components/Hero";
import TextHeadline from "../../components/TextHeadline";
import ProjectCarousel from "../../components/ProjectCarousel";

const HomeContentBody = ({data}) => {
    return ( 
        data.content.map(section => {
            switch (section._type) {
                case "hero":    
                    return <Hero data={section} />
                case "textHeadline":   
                    return <TextHeadline data={section} />
                case "projectCarousel":   
                    return <ProjectCarousel data={section} />
            }
        })
     );
}
 
export default HomeContentBody;