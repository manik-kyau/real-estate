import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import IndustryCard from "../IndustryCard/IndustryCard";
import { useLoaderData } from "react-router-dom";
import Gallery from "../Gallery/Gallery";

// swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';
import Team from "../Team/Team";
// import { RxArrowTopRight } from 'react-icons/rx'

const Home = () => {

    const industrialData = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Banner></Banner>
            <div className="text-center my-8 space-y-4"
             data-aos="fade-right"
             data-aos-offset="300"
             data-aos-easing="ease-in-sine">
                <h2 className="text-3xl md:text-4xl font-bold"> Exploring the World of FactoryNexus</h2>
                <p className="w-full md:w-3/5 lg:w-4/5 text-base font-medium mx-auto">FactoryNexus is a cutting-edge platform designed to revolutionize manufacturing operations by seamlessly integrating various aspects of production, supply chain management, and data analytics. With its sophisticated technology infrastructure, FactoryNexus facilitates real-time monitoring and control of factory processes, optimizing efficiency and minimizing downtime.</p>
            </div>
            <div className="flex flex-col  lg:flex-row  mb-8"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
                <Swiper
                    breakpoints={{
                        340: {
                            slidesPerView: 1,
                            spaceBetween: 16
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 32
                        },
                        1180:{
                            slidesPerView: 3,
                            spaceBetween: 32
                        }
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[FreeMode, Pagination]}
                    className='w-[100%]'
                    >
                    {
                        industrialData.map((data, idx) =><SwiperSlide key={idx} className="flex justify-center"><div className="flex flex-col gap-6 mb-12 group"><IndustryCard data={data}></IndustryCard></div></SwiperSlide>)
                    }
                </Swiper>


                {/* {
                    industrialData.map((data,idx )=><IndustryCard key = {idx} data={data}></IndustryCard>)
                } */}
            </div>
            <Gallery></Gallery>
            <Team></Team>
        </div>
    );
};

export default Home;