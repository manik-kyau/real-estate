import Manik from '../../assets/images/gallery/manik.jpg'
import Leory from '../../assets/images/gallery/leory.webp'
import Jaki from '../../assets/images/gallery/jaki.jpg'
import Angelina from '../../assets/images/gallery/angelina.jpg'
import Himel from '../../assets/images/gallery/himel.jpg'
import Farhad from '../../assets/images/gallery/farhad.jpg'
const Team = () => {
    return (
        <div className="w-full lg:w-[1280px] mx-auto px-5 lg:px-0">
            <section className="dark:bg-gray-100 dark:text-gray-800 lg:w-[1180px] mx-auto">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl text-[#131313]">Our team</h1>
                        <p className="max-w-2xl text-center dark:text-gray-600 mt-3 text-[#686767]">Welcome to the heart of our organization—the talented individuals who drive our mission forward. Meet the diverse and dedicated team behind "Factory Nexus", each bringing a unique set of skills, experiences, and passions to the table.</p>
                    </div>
                    <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Farhad} />
                            <p className="text-xl font-semibold leading-tight">Farhad Ahmed</p>
                            <p className="dark:text-gray-600">Web Engineer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Himel} />
                            <p className="text-xl font-semibold leading-tight"> Himel Rana</p>
                            <p className="dark:text-gray-600">Web Developer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Leory} />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkin</p>
                            <p className="dark:text-gray-600">Visual Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Angelina} />
                            <p className="text-xl font-semibold leading-tight">Angel Malaila</p>
                            <p className="dark:text-gray-600">Web Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Jaki} />
                            <p className="text-xl font-semibold leading-tight">Khusbu Manju</p>
                            <p className="dark:text-gray-600">Visual Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Manik} />
                            <p className="text-xl font-semibold leading-tight"> Manik Sarkar</p>
                            <p className="dark:text-gray-600">Web Designer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;