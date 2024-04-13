import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { LiaIndustrySolid } from "react-icons/lia";
// import { FaDollarSign } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { FaIndustry } from "react-icons/fa";

const IndustryDetails = () => {
    const totalData = useLoaderData();
    const { id } = useParams();
    const singleData = totalData.find(data => data.id == id);
    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = singleData;
    // console.log('selected id :', id);
    // console.log('selected id :', totalData);
    return (
        <>
            <Helmet>
                <title>Industry Details {id}</title>
            </Helmet>
            <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center py-4 my-8 bg-gray-100 rounded-md"
                 data-aos="zoom-in">Industry Details</h2>
            </div>
            <div className="my-8 lg:my-12">
                <div className="hero bg-gray-100 rounded-xl py-5 md:py-10 lg:py-12">
                    <div className="hero-content flex-col md:flex lg:flex-row-reverse gap-8 lg:gap-14">
                            <div className="lg:min-w-[400px] h-[450px] rounded-lg shadow-2xl"
                             data-aos="fade-left">
                            <img src={image} className=" h-[450px] rounded-lg shadow-2xl" /></div>
                        <div className="" data-aos="fade-right">
                            <h1 className="text-3xl lg:text-4xl font-bold">{estate_title}</h1>
                            <h2 className="flex gap-2 items-center text-xl font-bold my-3">
                                <FaIndustry></FaIndustry>
                                {segment_name}
                            </h2>
                            <p className="py-6 text-base font-normal">{description}</p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <h2 className="flex gap-1 items-center text-base font-semibold">
                                        <SlLocationPin className="text-green-500"></SlLocationPin>
                                        {location}
                                    </h2>
                                    <h2 className="flex gap-1 items-center text-base font-semibold">
                                        <LiaIndustrySolid className="text-green-500 text-xl"></LiaIndustrySolid>
                                        {area}
                                    </h2>
                                    <h2 className="text-base font-bold text-green-700">
                                        for {status}
                                    </h2>
                                </div>
                                <h2><span className="text-base font-bold ">Price:</span> <span className="text-base font-semibold text-green-700 ml-1">{price}</span></h2>
                                <div className="flex gap-2 lg:gap-5">
                                    <span className="text-base font-bold">Facilities:</span>
                                    {
                                        facilities.map((facility, idx) => <p className="text-base font-semibold bg-green-300 px-2 lg:px-5 rounded-[50px] " key={idx}>{facility}</p>)
                                    }
                                </div>
                            </div>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndustryDetails;