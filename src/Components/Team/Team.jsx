import Manik from '../../assets/images/gallery/manik.jpg'
import Leory from '../../assets/images/gallery/leory.webp'
import Jaki from '../../assets/images/gallery/jaki.jpg'
import Angelina from '../../assets/images/gallery/angelina.jpg'
import Himel from '../../assets/images/gallery/himel.jpg'
import Farhad from '../../assets/images/gallery/farhad.jpg'
const Team = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
                        <p className="max-w-2xl text-center dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                    </div>
                    <div className="flex flex-row flex-wrap-reverse justify-center"
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Farhad} />
                            <p className="text-xl font-semibold leading-tight">Farhad Reza</p>
                            <p className="dark:text-gray-600">Web Engineer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Himel} />
                            <p className="text-xl font-semibold leading-tight">Himel Rana</p>
                            <p className="dark:text-gray-600">Web Developer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Leory} />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <p className="dark:text-gray-600">Visual Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Angelina} />
                            <p className="text-xl font-semibold leading-tight">Angelina Malaila</p>
                            <p className="dark:text-gray-600">Web Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Jaki} />
                            <p className="text-xl font-semibold leading-tight">Jaky Lawra</p>
                            <p className="dark:text-gray-600">Visual Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={Manik} />
                            <p className="text-xl font-semibold leading-tight">Md. Manik Sarkar</p>
                            <p className="dark:text-gray-600">Web Designer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;