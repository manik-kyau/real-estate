import G1 from '../../assets/images/gallery/g1.jpg';
import G2 from '../../assets/images/gallery/g2.jpg';
import G3 from '../../assets/images/gallery/g3.jpg';
import G4 from '../../assets/images/gallery/g4.jpg';
import G5 from '../../assets/images/gallery/g5.jpg';
import G6 from '../../assets/images/gallery/g6.jpg';
import G7 from '../../assets/images/gallery/g7.jpg';
import G8 from '../../assets/images/gallery/g8.jpg';
import G9 from '../../assets/images/gallery/g9.jpg';
import G10 from '../../assets/images/gallery/g10.jpg';

const Gallery = () => {
    return (
        <div className="w-full lg:w-[1280px] mx-auto px-5 lg:px-0">
            <div className='my-8 md:my-12'>
                <div className='mb-8 space-y-4 text-center' data-aos="fade-down">
                    <h2 className='text-3xl md:text-4xl font-bold text-center'>Photo Gallery</h2>
                    <p className="w-full md:w-3/5 lg:w-4/5 text-base font-medium mx-auto">Industrial galleries may also host exhibitions, events, and workshops aimed at engaging audiences with the themes and concepts explored in the artwork. Additionally, they may serve as venues for discussions on topics such as sustainability, urban development, and the future of industry.</p>
                </div>
                <section className=" dark:bg-gray-100 dark:text-gray-900">
                    <div className=" grid grid-cols-2 gap-4 mx-auto md:grid-cols-4"
                        data-aos="fade-up">
                        <img src={G1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G2} />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G3} />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G4} />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G5} />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G6} />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G7} />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G8} />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G9} />
                        <img src={G10} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;