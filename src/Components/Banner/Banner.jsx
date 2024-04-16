import Banner1 from '../../assets/images/banner1.jpg';
import Banner2 from '../../assets/images/banner2.jpg';
import Banner3 from '../../assets/images/banner3.jpg';

const Banner = () => {
    return (
        <div className='w-full lg:w-[1280px] mx-auto px-5 lg:px-0'>
            <div className="carousel w-full my-8">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='w-full relative rounded-3xl'>
                        <img src={Banner1} className="w-full h-[700px] md:h-[600px] rounded-3xl" />
                        {/* hero */}
                        <section className="absolute bottom-0 w-full h-full dark:bg-gray-100 dark:text-gray-800 bg-black bg-opacity-50 rounded-3xl">
                            <div className="mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32">
                                <h1 className="text-4xl font-bold text-[#23BE0A] leading-none sm:text-5xl"
                                    data-aos="fade-down"
                                    data-aos-duration="3000"
                                >Welcome to Factory Nexus: Where Innovation Unites Industries
                                </h1>
                                <div className=''
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <p className="px-8 mt-8 mb-12 text-lg font-medium text-white">"Factory Nexus is your gateway to a dynamic industrial ecosystem, where innovation meets collaboration. Our platform serves as a hub for connecting industries, fostering partnerships, and driving collective progress. Whether you're a manufacturer, supplier, or service provider, join us in shaping the future of industry. Welcome aboard!"</p>
                                    <div className="flex flex-wrap justify-center">
                                        <button className="px-8 py-3 m-2 text-xl font-semibold bg-green-500 hover:bg-green-500 text-white rounded dark:text-gray-900 d"
                                        >Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* hero */}

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='w-full relative'>
                        <img src={Banner2} className="w-full h-[700px] md:h-[600px] rounded-3xl" />
                        {/* hero */}
                        <section className="absolute bottom-0 w-full h-full dark:bg-gray-100 dark:text-gray-800 bg-black bg-opacity-50 rounded-3xl">
                            <div className="mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32">
                                <h1 className="text-4xl font-bold text-[#23BE0A] leading-none sm:text-5xl"
                                    data-aos="fade-down"
                                    data-aos-duration="3000"
                                >Welcome to Factory Nexus: Where Innovation Unites Industries
                                </h1>
                                <div className=''
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <p className="px-8 mt-8 mb-12 text-lg font-medium text-white">"Factory Nexus is your gateway to a dynamic industrial ecosystem, where innovation meets collaboration. Our platform serves as a hub for connecting industries, fostering partnerships, and driving collective progress. Whether you're a manufacturer, supplier, or service provider, join us in shaping the future of industry. Welcome aboard!"</p>
                                    <div className="flex flex-wrap justify-center">
                                        <button className="px-8 py-3 m-2 text-xl font-semibold bg-green-500 hover:bg-green-500 text-white rounded dark:text-gray-900 d"
                                        >Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* hero */}
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='w-full relative'>
                        <img src={Banner3} className="w-full h-[700px] md:h-[600px] rounded-3xl" />
                        {/* hero */}
                        <section className="absolute bottom-0 w-full h-full dark:bg-gray-100 dark:text-gray-800 bg-black bg-opacity-50 rounded-3xl">
                            <div className="mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32">
                                <h1 className="text-4xl font-bold text-[#23BE0A] leading-none sm:text-5xl"
                                    data-aos="flip-right"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">Welcome to Factory Nexus: Where Innovation Unites Industries
                                </h1>
                                <div data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                    <p className="px-8 mt-8 mb-12 text-lg font-medium text-white">"Factory Nexus is your gateway to a dynamic industrial ecosystem, where innovation meets collaboration. Our platform serves as a hub for connecting industries, fostering partnerships, and driving collective progress. Whether you're a manufacturer, supplier, or service provider, join us in shaping the future of industry. Welcome aboard!"</p>
                                    <div className="flex flex-wrap justify-center">
                                        <button className="px-8 py-3 m-2 text-xl font-semibold bg-green-500 hover:bg-green-500 text-white rounded dark:text-gray-900 d"
                                        >Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* hero */}
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;