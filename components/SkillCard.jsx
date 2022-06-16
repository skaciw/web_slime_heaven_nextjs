import React from "react";
import { Slider } from '../components/Slider';
import { motion } from "framer-motion";

const listStrategy = [
    {
      url: "/assets/images/B001 Overheat.png",
      title: "Overheat"
    },
    {
      url: "/assets/images/B002 Cure.png",
      title: "Cure"
    },
    {
      url: "/assets/images/B003 Earthquake.png",
      title: "Earthquake"
    },
    {
      url: "/assets/images/B004 Tornado.png",
      title: "Tornado"
    },
    {
      url: "/assets/images/B005 Blitz.png",
      title: "Blitz"
    },
    {
      url: "/assets/images/E002 Carefree.png",
      title: "Carefree"
    },
    {
      url: "/assets/images/H002 Bubble.png",
      title: "Bubble"
    },
    {
      url: "/assets/images/H010 Sacrifice.png",
      title: "Sacrifice"
    },
    {
      url: "/assets/images/M003 Shove.png",
      title: "Shove"
    },
    {
      url: "/assets/images/S005 Agility.png",
      title: "Agility"
    },  
];

const img_incinerate = {
    rest:{
        transform: "matrix(1, 0, 0, 1, 1425.96, 5892.05) rotate(0deg)",
        delay: 2,
    },
    play:{
        opacity: 1,
        transform: "matrix(1, 0, 0, 1, 1385.96, 5912.05) rotate(-20deg)",
        transition:{
            type: "spring",
            duration: 0.8,
            ease: "easeIn",
        }
    }
}
const img_water = {
    rest:{
        transform: "matrix(1, 0, 0, 1, 1425.96, 5892.05) rotate(0deg)",
        delay: 2,
    },
    play:{
        transform: "matrix(1, 0, 0, 1, 1475.96, 5922.05) rotate(15deg)",
        transition:{
            type: "spring",
            duration: 0.8,
            ease: "easeIn",
        }
    }
}
const img_crash={
    rest:{
        transform: "matrix(1, 0, 0, 1, 1425.96, 5892.05)",
        delay: 2,
    },
    play:{
        transform: "matrix(1, 0, 0, 1, 1410.96, 5872.05)",
        transition:{
            type: "spring",
            duration: 0.8,
            ease: "easeIn",
        }
    }
}

export const SkillCard = () => {
    
    return (
        <div>
            <div className='container mx-auto  flex  flex-wrap  justify-center items-center'>
                <div className='w-full lg:w-3/4 '>
                    <div className='text-center lg:text-left px-0 lg:px-8 lg '>
                    <h1 className='title-text py-4  color-title font-cp'>Strategy with Endless Variety!</h1>
                    <span className='desc-text flex justify-center items-center flex-col '>
                        <p className='font-poppins'>Utilize a vast array of skill cards to gain an upper hand in battle. 
                        Each card has its own strengths and weaknesses, and one good move could easily turn the tide of battle 
                        in your favour. Each card tells a story, and gives you a glimpse of the colourful world of Slime Haven!</p>
                    </span>
                    </div>
                </div>
                <div className='w-full lg:w-1/4 '>
                    <div className='flex justify-center items-center'>
                        <motion.svg initial="rest" animate="rest" whileInView="play" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 554.595 442.288">
                            <defs>
                                <filter id="Layer_62" x="0" y="24.911" width="372.991" height="402.467" filterUnits="userSpaceOnUse">
                                    <feOffset dx="-9.548" dy="10.239" input="SourceAlpha"/>
                                    <feGaussianBlur stdDeviation="12" result="blur"/>
                                    <feFlood floodColor="#24272e" floodOpacity="0.349"/>
                                    <feComposite operator="in" in2="blur"/>
                                    <feComposite in="SourceGraphic"/>
                                </filter>
                                <filter id="Layer_60" x="135.414" y="56.06" width="257.969" height="330.169" filterUnits="userSpaceOnUse">
                                    <feOffset dx="-9.548" dy="10.239" input="SourceAlpha"/>
                                    <feGaussianBlur stdDeviation="12" result="blur-2"/>
                                    <feFlood floodColor="#24272e" floodOpacity="0.349"/>
                                    <feComposite operator="in" in2="blur-2"/>
                                    <feComposite in="SourceGraphic"/>
                                </filter>
                                <filter id="Layer_61" x="141.304" y="0" width="413.292" height="442.288" filterUnits="userSpaceOnUse">
                                    <feOffset dx="-9.548" dy="10.239" input="SourceAlpha"/>
                                    <feGaussianBlur stdDeviation="12" result="blur-3"/>
                                    <feFlood floodColor="#24272e" floodOpacity="0.349"/>
                                    <feComposite operator="in" in2="blur-3"/>
                                    <feComposite in="SourceGraphic"/>
                                </filter>
                            </defs>
                            <g id="skill_card" data-name="skill_card" transform="translate(-1425.964 -5892.048)">
                                <motion.g variants={img_incinerate} transform="matrix(1, 0, 0, 1, 1425.96, 5892.05)" filter="url(#Layer_62)">
                                    <image  id="Layer_62-2" data-name="Layer 62" width="236.949" height="278.634" transform="translate(117.66 50.67) rotate(15)" xlinkHref="/assets/images/incinerate-card.png"/>
                                </motion.g>
                                <motion.g variants={img_crash} transform="matrix(1, 0, 0, 1, 1425.96, 5892.05)" filter="url(#Layer_60)">
                                    <image id="Layer_60-2" data-name="Layer 60" width="185.969" height="258.169" transform="translate(180.96 81.82)" xlinkHref="/assets/images/crash-card.png"/>
                                </motion.g>
                                <motion.g variants={img_water} transform="matrix(1, 0, 0, 1, 1425.96, 5892.05)" filter="url(#Layer_61)">
                                    <image  id="Layer_61-2" data-name="Layer 61" width="247.07" height="299.546" transform="translate(186.85 118.32) rotate(-22)" xlinkHref="/assets/images/water-jet-card.png"/>
                                </motion.g>
                            </g>
                        </motion.svg>
                    </div>
                </div>
            </div>

            <Slider list={listStrategy} id={2}/>
        </div>
    );
}