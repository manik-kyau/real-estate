import { Helmet } from "react-helmet-async";
import Meating from '../../assets/images/gallery/meating.webp'

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>FactoryNexus | About Us</title>
            </Helmet>
            <div className="w-full lg:w-[1280px] mx-auto px-5 lg:px-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center py-4 my-8 bg-gray-100 rounded-md text-[#131313]"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >About Us</h2>
                <div className="my-8 md:my-10 lg:my-14 bg-gray-100 rounded-lg"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div className="hero-content flex-col gap-8 md:gap-10 lg:gap-14 lg:flex-row-reverse py-8 md:py-10 lg:py-14">
                        <div className="lg:h-[400px]">
                            <img src={Meating} className="max-w-full md:w-[990px] lg:max-w-md h-full rounded-lg shadow-2xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#131313]">Welcome to our website</h1>
                            <p className=" py-3 md:5 lg:py-6 text-justify text-base font-medium text-[#5c5b5b]">Welcome to Factory Nexus, the driving force behind industrial innovation and efficiency. With a legacy spanning 20 years, we have been at the forefront of industrial evolution, catering to a diverse array of sectors worldwide.

                                At Factory Nexus, we live and breathe industrial excellence. Our journey began with a simple yet powerful vision: to revolutionize the way industries operate by providing reliable, cutting-edge solutions that optimize processes, enhance productivity, and minimize environmental impact.

                                What sets us apart is our unwavering commitment to quality, safety, and customer satisfaction. Every product and service we offer is a testament to our dedication to excellence and our relentless pursuit of perfection. From manufacturing and logistics to energy and infrastructure, we offer a comprehensive suite of solutions designed to meet the unique needs of each industry we serve.</p>
                            <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white text-lg font-semibold">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;