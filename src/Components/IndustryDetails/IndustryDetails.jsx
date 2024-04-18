import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { LiaIndustrySolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { FaIndustry } from "react-icons/fa";

const IndustryDetails = () => {
    const totalData = useLoaderData();
    const { id } = useParams();
    const singleData = totalData.find(data => data.id == id);
    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = singleData;
    return (
        <>
            <Helmet>
                <title>Industry Details {id}</title>
            </Helmet>
            <div className="w-full lg:w-[1280px] mx-auto px-5 lg:px-0">
                <div >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center py-4 my-8 bg-gray-100 rounded-md"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >Industry Details</h2>
                </div>
                <div className="my-8 lg:my-12">
                    <div className="hero bg-gray-100 rounded-xl py-5 md:py-10 lg:py-12">
                        <div className="hero-content flex-col md:flex lg:flex-row-reverse gap-8 lg:gap-14">
                            <div className="w-full lg:min-w-[400px] md:h-[450px] rounded-lg shadow-2xl"
                                data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                <img src={image} className=" md:h-[450px] w-full rounded-lg shadow-2xl" /></div>
                            <div className=""
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                <h1 className="text-3xl lg:text-4xl font-bold">{estate_title}</h1>
                                <h2 className="flex gap-2 items-center text-xl font-bold my-3">
                                    <FaIndustry></FaIndustry>
                                    {segment_name}
                                </h2>
                                <p className="py-6 text-base font-medium">{description}</p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <h2 className="flex gap-1 items-center text-base font-semibold">
                                            <SlLocationPin className="text-[#23BE0A]"></SlLocationPin>
                                            {location}
                                        </h2>
                                        <h2 className="flex gap-1 items-center text-base font-semibold">
                                            <LiaIndustrySolid className="text-[#23BE0A] text-xl"></LiaIndustrySolid>
                                            {area}
                                        </h2>
                                        <h2 className="text-base font-bold text-[#23BE0A]">
                                            for {status}
                                        </h2>
                                    </div>
                                    <h2><span className="text-base font-bold">Price:</span> <span className="text-base font-semibold text-[#23BE0A] ml-1">{price}</span></h2>
                                    <div className="flex gap-2 lg:gap-5">
                                        <span className="text-base font-bold">Facilities:</span>
                                        {
                                            facilities.map((facility, idx) => <p className="text-base font-semibold  text-white bg-[#23BE0A] px-2 md:px-5 rounded-[50px] " key={idx}>{facility}</p>)
                                        }
                                    </div>
                                    <div className="pt-4">
                                        <button className=" px-8 rounded-3xl py-2 bg-[#23BE0A] text-white hover:bg-[#23BE0A] text-lg font-semibold">Reserve</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndustryDetails;