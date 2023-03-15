const Hero = ({data}) => {
    return ( 
        <section key={data._key} className="py-6">
            <div className="grid-layout">
                <div className="col-start-2 col-span-10 md:col-start-2 md:col-span-8">
                    <h1 class="headline-160">{data.title}</h1>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;