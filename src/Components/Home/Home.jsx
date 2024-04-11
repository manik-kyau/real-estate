import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import IndustryCard from "../IndustryCard/IndustryCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const industrialData = useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            
            <Banner></Banner>
            <div className="text-center my-8 space-y-4">
                <h2 className="text-4xl font-bold"> Exploring the World of FactoryNexus</h2>
                <p className="w-full md:w-3/5 lg:w-4/5 text-base font-medium mx-auto">FactoryNexus is a cutting-edge platform designed to revolutionize manufacturing operations by seamlessly integrating various aspects of production, supply chain management, and data analytics. With its sophisticated technology infrastructure, FactoryNexus facilitates real-time monitoring and control of factory processes, optimizing efficiency and minimizing downtime.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    industrialData.map((data,idx )=><IndustryCard key = {idx} data={data}></IndustryCard>)
                }
            </div>
        </div>
    );
};

export default Home;