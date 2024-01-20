"use client"

// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

import './productDetail.css'
import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import ObjectID from 'bson-objectid';

export function ProductDetails() {

    const [ mainSwiper ] = useState<SwiperClass>();
    const [thumbSwiper, setThumbSwiper] = useState<SwiperClass>();


    const [ imgLinks, setImgLinks ] = useState<string[]>([
        'https://storeganjiswag.com/cdn/shop/files/7-600x600_72472dcc-e90a-4de7-8d6e-7208ba6cf15f_550x.png?v=1689343091',
        'https://storeganjiswag.com/cdn/shop/files/4_27092f48-ca4d-49c1-a368-ea4ef83f9b2d_550x.png?v=1689343091',
        'https://storeganjiswag.com/cdn/shop/files/2_169a2627-3541-4a49-8341-342eae7d08c8_550x.png?v=1689343091',
        'https://storeganjiswag.com/cdn/shop/files/1_90469653-1026-4d82-975a-c0e160f76d93_550x.png?v=1689343091',
        'https://storeganjiswag.com/cdn/shop/files/13-600x600_81d79b67-c3fa-4b37-ab00-ce2f1a62c4d6_550x.png?v=1689343091'
    ]);

    return (
        <section>
            <div className="py-4">
                <div>
                    <div>
                        {/* Main Swiper */}
                        <div>
                            <Swiper
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                thumbs={{
                                    swiper: thumbSwiper
                                }}
                                className="main-swiper"
                            >
                                {
                                    imgLinks.map(link => (
                                        <SwiperSlide key={new ObjectID().toHexString()}>
                                            <div className="swiper-slide">
                                                <img className="object-fit w-full select-none" src={link} alt="" />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>

                        {/* Thumb Swper */}
                        <div className="mt-3">
                            <Swiper
                                className="thumb-swiper"
                                onSwiper={setThumbSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                onInit={() => {
                                    console.log(thumbSwiper?.activeIndex);
                                }}
                                speed={300}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[Navigation, Thumbs, FreeMode]}
                                onAfterInit={() => {
                                    console.log(document.querySelector('.swiper-slide-active'));
                                    (document.querySelector('.swiper-slide-active') as HTMLDivElement)?.click()                              
                                }}

                            >
                                {
                                    imgLinks.map((link, index) => (
                                        <SwiperSlide
                                            key={new ObjectID().toHexString()}
                                        >
                                            <div className={`block border border-transparent hover:border-blue-400`} >
                                                <img 
                                                    onClick={
                                                        () => {
                                                            mainSwiper?.slideTo(index);
                                                            thumbSwiper?.slideTo(index);
                                                        }
                                                    }
                                                    src={link}
                                                    className="object-fit w-full lg:h-32 select-none"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}