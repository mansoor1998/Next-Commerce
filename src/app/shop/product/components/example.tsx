"use client"
import ObjectID from "bson-objectid";
import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export function Example(){
    const swiperRef = useRef(null);
    const [index, setIndex] = useState(0);

    const [ imgLinks, setImgLinks ] = useState<string[]>([
        'https://storeganjiswag.com/cdn/shop/files/7-600x600_72472dcc-e90a-4de7-8d6e-7208ba6cf15f_550x.png?v=1689343091',
        'https://storeganjiswag.com/cdn/shop/files/4_27092f48-ca4d-49c1-a368-ea4ef83f9b2d_550x.png?v=1689343091',
        'https://storeganjiswag.com/cdn/shop/files/2_169a2627-3541-4a49-8341-342eae7d08c8_550x.png?v=1689343091',
        'https://storeganjiswag.com/cdn/shop/files/1_90469653-1026-4d82-975a-c0e160f76d93_550x.png?v=1689343091',
        'https://storeganjiswag.com/cdn/shop/files/13-600x600_81d79b67-c3fa-4b37-ab00-ce2f1a62c4d6_550x.png?v=1689343091'
    ]);

    useEffect(() => {
        if (swiperRef.current) {
          const swiper = new Swiper(swiperRef.current, {
            spaceBetween: 10,
            slidesPerView: 4,
            speed: 300,
            loop: true,
            modules: [Navigation],
            navigation: {
                enabled: true,
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                clickable: false
            }

          }); 
          
          swiper.on('slideChangeTransitionStart', () => {
            console.log(swiper.realIndex);
            setIndex(swiper.realIndex);
          })
        }
    }, []);

    return (
        <div>
            <div className="swiper mySwiper" ref={swiperRef}>
                <div className="swiper-wrapper">
                    {
                        imgLinks.map((link, _index) => (
                            <div className="swiper-slide" key={new ObjectID().toHexString()}>
                                <div className={`block border border-transparent ${index === _index ? 'border-blue-400' : ''}  hover:border-blue-400`}>
                                    <img 
                                        onClick={() => {
                                            setIndex(index);
                                        }}
                                        className="object-fit w-full" src={link} alt="" 
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    );

}