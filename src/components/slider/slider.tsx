"use client"
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';


import './slider.css'
import AnimatedTitle from '../animatedTitle/animatedTitle';
import ObjectID from 'bson-objectid';

interface SwipperSliderModel {
    activeIndex: boolean;
    title: string;
    description: string
    text: string[];
    imgUrl: string;
    altImgDescription?: string;
    posTopClass?: string;
    postLeftClass?: string;
    posRightClass?: string;
    posBottomClass?: string;
    fontSize?: string;
}

export default function Slider() {

   const [swiper, setSwiper] = useState<SwiperClass>();

    const [swipperSlider, setSwipperSlider] = useState<SwipperSliderModel[]>([
        {
            activeIndex: false,
            title: "",
            description: "",
            text: ['SMART WATCH', 'Available Now!'],
            imgUrl: "https://storeganjiswag.com/cdn/shop/files/watch_1440fe30-2e47-4f91-a9ad-eaa539527aa1.webp?v=1684602718",
            posTopClass: 'top-1/3',
            posRightClass: "md:right-1/3 text-center",
            fontSize: "text-xl md:text-4xl"
        },
        {
            activeIndex: false,
            title: "",
            description: "",
            text: ['Oculus Quest', 'New stock out now!!'],
            imgUrl: "https://storeganjiswag.com/cdn/shop/files/vr-glasses_0d4ee514-ea2c-4a18-a9d3-77d1a52d09d0.webp?v=1685198481",
            posTopClass: "top-1/3",
            posRightClass: "md:left-1/3 text-center",
            fontSize: "text-xl md:text-4xl"
        },
        {
            activeIndex: false,
            title: "",
            description: "",
            text: ['Portable Bluetooth Loudspeaker', 'Real Audio Experience'],
            imgUrl: "../sound.webp",
            posTopClass: "top-1/3",
            postLeftClass: "md:left-1/2 text-center",
            fontSize: "text-xl md:text-4xl"
        }
    ]);

    useEffect(() => {
        setSwipperSlider(
            [
                {
                    ...swipperSlider[0],
                    activeIndex: true
                },
                ...swipperSlider.slice(1)
            ]
        );
    }, []);

    return (
        <div className="relative">
            <Swiper
                onSwiper={setSwiper}
                // onSlideNextTransitionEnd={() => {
                //     if(!swipperSlider.at(swiper?.realIndex!)?.activeIndex) {
                //         // setSwipperSlider(swipperSlider.map((slider, index) => {
                //         //     slider.activeIndex = swiper?.realIndex === index;
                //         //     return slider;
                //         // }));                    
                //         swiper?.updateProgress();
                //     }
                // }}
                allowTouchMove={false}
                loop={true}
                modules={[Navigation, Autoplay]}
                autoplay= {{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    stopOnLastSlide: true
                }}
                className="mySwiper"
                direction='horizontal'
            >
                {
                    swipperSlider.map((slider, index) => {
                        return (
                            <SwiperSlide key={new ObjectID().toHexString()}>
                                <div className='myback relative'>
                                    <img src={slider.imgUrl} />
                                    <div className={`absolute z-20 text-white ${slider.fontSize ?? ''} ${slider.posTopClass ?? ''} ${slider.postLeftClass ?? ''} ${slider.posRightClass ?? ''} ${slider.posBottomClass ?? ''}`}>
                                        <AnimatedTitle lines={ slider.text } />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div
                style={{ top: 'calc(50% - 20px)' }} 
                className="absolute left-3 z-30"
            >
                <button
                    onClick={() => swiper?.slidePrev()} 
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded-full shadow"
                >
                    <img className="w-6" src="../assets/icons/left-arrow.svg" />
                </button>
            </div>

            <div 
                style={{ top: 'calc(50% - 20px)' }}  
                className="absolute right-3 z-30"
            >
                <button 
                    onClick={() => swiper?.slideNext()} 
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded-full shadow"
                >
                    <img className="w-6" src="../assets/icons/right-arrow.svg" alt="" />
                </button>
            </div>

        </div>
      );
}