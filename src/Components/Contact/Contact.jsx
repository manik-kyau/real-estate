import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div className="w-full lg:w-[1280px] mx-auto px-5 lg:px-0">
            <Helmet>
                <title>FactoryNexus | Contuct Us</title>
            </Helmet>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center py-6 mt-8 bg-gray-100 rounded-md text-[#131313]" data-aos="zoom-in">Contact Us</h2>
            <section className="py-6 md:py-10 lg:py-14 dark:bg-gray-100 dark:text-gray-900 bg-gray-100 my-8 md:my-10 lg:my-14 rounded-xl"
                data-aos="fade-up"
                data-aos-duration="2000">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4 text-lg font-semibold text-[#424242]">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-semibold text-[#424242]">address, 9999 City Uttara Dhaka</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span className="text-base font-semibold text-[#424242]">01734567890</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span className="text-base font-semibold text-[#424242]">admin.contact@bgamil.com</span>
                            </p>
                        </div>
                        <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                    </div>
                    <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block text-lg font-semibold">
                            <span className="mb-1 text-[#424242]">Full name</span>
                            <input type="text" placeholder="Enter Your Name" className="block w-full rounded-md py-3 px-4 outline-none focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </label>
                        <label className="block text-lg font-semibold">
                            <span className="mb-1 text-[#424242]">Email address</span>
                            <input type="email" placeholder="Enter Your Email" className="block py-3 px-4 outline-none w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </label>
                        <label className="block text-lg font-semibold">
                            <span className="mb-1 text-[#424242]">Message</span>
                            <textarea rows="3" placeholder="Enter Your Message" className="block outline-none py-3 px-4 w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                        </label>
                        <button type="button" className="self-center px-8 py-3 text-lg font-semibold rounded focus:ring hover:ring focus:ring-opacity-75 bg-green-500 hover:bg-green-500 w-full text-white">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;