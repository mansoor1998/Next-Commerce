"use client"
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import ObjectID from "bson-objectid";
import React, { useEffect, useRef, useState } from "react";

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export default function AnimatedTitle({
    lines
}: { lines: string[] }) {

    const instanceRef = useRef(null);
    const isInView = useInView(instanceRef);
    const [ visible, setVisibility ] = useState(false);

    useEffect(() => {
        // console.log(isInView);
        if(visible !== isInView)
            setVisibility(isInView);
    }, [isInView]);

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.04
            },
        },
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        }
    }

    return (
        <div ref={instanceRef}>
            {
                visible && 
                <motion.h1
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                    className="load-screen--message font-salsa font-bold"
                > 
                    {
                        lines.map(line => (
                            <span key={ new ObjectID().toHexString() } className="block mb-2">
                                {
                                    line.split("").map((char, index) => {
                                        return (
                                            <React.Fragment key={char + "-" + index}>
                                                <motion.span variants={letter}>
                                                    {char}
                                                </motion.span>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </span>
                        ))
                    }
                </motion.h1>
            }
        </div>
    );

}

{/* <div ref={ref} style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>

            <motion.div
                variants={{
                    hidden: {left: 0},
                    visible: {left: "100%"}
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                    background: "#f00"
                }}
            >
            </motion.div>
        </div> */}