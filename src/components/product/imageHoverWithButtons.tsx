"use client"

import React, { useState } from 'react';
import { AnimatePresence, AnimationProps, Variants, motion } from 'framer-motion';

function ImageHoverWithButtons() {

    const [hovered, setHovered] = useState(false);

    const imgData = 'data:image/png;base64,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';

//   const buttonVariants = {
//     initial: { opacity: 0, y: 40 },
//     hover: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
//   };

  const handleHover = () => {
    setHovered(true);
  };

  const handleHoverExit = () => {
    setHovered(false);
  };

  return (
    <div className="relative mx-2 cursor-pointer" style={{ height: "300px", width: "300px" }} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
        <motion.img
            src={'https://storeganjiswag.com/cdn/shop/files/ee49fa24f55d5ac5aa79bf7761483b2a_0d1cb96d-a76a-4703-82c5-73c803bcf116_533x.jpg?v=1703864344'}
            alt="Image"
            exit={
                { 
                    opacity: 0, 
                    // scale: 0,
                    transition: {
                        duration: 0.3
                    },
                    // position: "absolute",
                    // top: "0",
                    // left: "0" 
                }
            }
            initial={
                {
                    opacity: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: "cover"
                    // scale: 0
                }
            }
            whileHover="hover"
            animate={
                { 
                    opacity: 1, 
                    // scale: 1, 
                    transition: {
                        duration: 0.4
                    },
                    transitionEnd: {
                        position: "relative"
                    }
                } 
            }
        />
      
        {/* <motion.img
            src={'https://storeganjiswag.com/cdn/shop/files/PS5-DISC-SM2-Hero-1-US_533x.webp?v=1703864344'}
            alt="Image"
            whileHover="hover"
            initial={
                { 
                    opacity: 0,
                    position: "absolute"
                    // scale: 1 
                }
            }
            exit={
                { 
                    opacity: 0, 
                    // scale: 1 
                }
            }
            animate={
                {
                    transition: {
                        duration: 0.3,
                    },
                    // scale: 1.1,
                    opacity: 1,
                    transitionEnd: {
                        position: "relative"
                    }
                } 
            }
        /> */}
    </div>
  );
}

export default ImageHoverWithButtons;
