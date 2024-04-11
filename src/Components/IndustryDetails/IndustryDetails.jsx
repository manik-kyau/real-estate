import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const IndustryDetails = () => {
    const totalData = useLoaderData();
    const { id } = useParams();
    const singleData = totalData.find(data => data.id == id);
    const { estate_title, segment_name, description, price, status, arealocation, facilities, image } = singleData;
    // console.log('selected id :', id);
    // console.log('selected id :', totalData);
    return (
        <>
        <Helmet>
            <title>Industry Details</title>
        </Helmet>
            <div className="my-8 lg:my-12">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{estate_title}</h1>
                            <p className="py-6">{description}</p>

                            <div className="flex gap-5">
                                {
                                    facilities.map((facility, idx) => <p key={idx}>{facility}</p>)
                                }
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