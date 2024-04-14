// import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// // import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/free-mode';

// import {FreeMode, Pagination} from 'swiper/modules';
// import {RxArrowTopRight} from 'react-icons/rx'
// // import 'swiper/css/navigation';
// // import { EffectCoverflow,Pagination, Navigation } from 'swiper/modules';
import G1 from '../../assets/images/gallery/g1.jpg';
import G2 from '../../assets/images/gallery/g2.jpg';
import G3 from '../../assets/images/gallery/g3.jpg';
import G4 from '../../assets/images/gallery/g4.jpg';
import G5 from '../../assets/images/gallery/g5.jpg';
import G6 from '../../assets/images/gallery/g6.jpg';
import G7 from '../../assets/images/gallery/g7.jpg';
import G8 from '../../assets/images/gallery/g8.jpg';
import G9 from '../../assets/images/gallery/g9.jpg';

const Gallery = () => {
    return (
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
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G8}/>
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G9} />
                    <img src={G1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>





            {/* <div className='border-2 border-red-600 flex justify-center items-center'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }
                    }
                    pagination={{el:'.swiper-pagination',clickable:true}}
                    navigation={{
                        nextEl:'.swiper-buttom-next',
                        prevtEl:'.swiper-buttom-prev',
                        clickable:true,
                    }}
                    modules={[EffectCoverflow,Pagination,Navigation]}
                    className="swiper-container"
                >
                    <SwiperSlide>
                        <img className='h-[200px]' src={G1} alt="G1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[200px]' src={G2} alt="G2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[200px]' src={G3} alt="G3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[200px]' src={G4} alt="G4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[200px]' src={G5} alt="G5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[200px]' src={G6} alt="G6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[200px]' src={G7} alt="G7" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[200px]' src={G8} alt="G8" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[200px]' src={G9} alt="G9" />
                    </SwiperSlide>

                    <div className="slider-container">
                        <div className="swiper-buttom-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-buttom-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div> */}
        </div>
    );
};

export default Gallery;