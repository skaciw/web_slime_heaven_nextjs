import React from "react";
import { motion } from "framer-motion";

const img_purple = {
    rest:{
        transform: "matrix(1, 0, 0, 1, 732, 2821) rotate(0deg)",
    },
    play:{
        transform: "matrix(1, 0, 0, 1, 702, 2841) rotate(-20deg)",
        transition:{
            type: "spring",
            duration: 0.8,
            ease: "easeIn",
        }
    }
}

const img_red = {
    rest:{
        transform: "matrix(1, 0, 0, 1, 732, 2821)",
    },
    play:{
        transform: "matrix(1, 0, 0, 1, 732, 2801)",
        transition:{
            type: "spring",
            duration: 0.8,
            ease: "easeIn",
        }
    }
}

const img_green = {
    rest:{
        transform: "matrix(1, 0, 0, 1, 732, 2821) rotate(0deg)"
    },
    play:{
        transform: "matrix(1, 0, 0, 1, 752, 2821) rotate(20deg)",
        transition:{
            type: "spring",
            duration: 0.8,
            ease: "easeIn",
        }
    }
}

const divScale ={
    rest:{
        // x: 0,
        padding: 0,
        delay: 2,
        // transform: 'skewX(0)',
    },
    play:{
        // transform: 'skewX(100%)',
        // x: 10,
        padding: 3,
        // transform: 'scale(1.05)',
        transition:{
            type: "spring",
            duration: 0.8,
            ease: "easeIn",
        }
    }
}

const img_hatch_data = {
    rest:{
        transform: 'rotate(0deg)',
        delay: 3,
    },
    play:{
        transform: 'rotate(-5deg)',
        transition:{
            type: "spring",
            duration: 0.8,
            ease: "easeIn",
        }
    }
}

const double_slime = {
    rest:{
        transform: 'translate(1057px ,3081.789px) scale(0.95)',
        delay: 3,
    },
    play:{
        transform: 'translate(1057px ,3081.789px) scale(1.005)',
        transition:{
            type: "spring",
            duration: 0.8,
            ease: "easeIn",
        }
    }
}

const slime_brown = {
    rest:{
        transform: 'translate(1204px, 3227.789px)',
        delay: 3,
    },
    play:{
        transform: 'translate(1204px, 3237.789px)',
        transition:{
            type: "spring",
            duration: 0.8,
            ease: "easeIn",
        }
    }
}
export const BreedBond = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
          <div className='text-center'>
            <h1 className='title-text py-4 color-title font-cp'>BREED AND BOND!</h1>
            <span className='desc-text flex justify-center items-center flex-col px-8 sm:px-0'>
              <p className='w-full sm:w-3/5 font-poppins'>Love is all 
              sorts of things, but it’s something quite special especially when it 
              comes to your very own slimes!</p>
            </span>
          </div>

          <div  className='relative py-8 md:p-8 w-11/12'>
            <motion.div variants={divScale} initial="rest" animate="rest" whileInView="play" className='border-style mx-16 flex flex-wrap justify-center items-center'>
              <div className='w-full md:w-1/4 flex justify-center items-center'>
                <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 420 274">
                    <defs>
                        <clipPath id="clip-path-petting">
                            <rect id="Rectangle_172" data-name="Rectangle 172" width="420" height="274" transform="translate(1993 7112)" fill="#fff" stroke="#707070" strokeWidth="1"/>
                        </clipPath>
                        <filter id="Layer_63" x="-45.548" y="-14.382" width="325.588" height="337.242" filterUnits="userSpaceOnUse">
                            <feOffset dx="-9.548" dy="10.239" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="12" result="blur"/>
                            <feFlood floodColor="#24272e" floodOpacity="0.349"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        <pattern id="pattern-petting-green" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 316 226">
                            <image width="316" height="226" xlinkHref="/assets/images/petting-green.png"/>
                        </pattern>
                        <filter id="Layer_65" x="-10.317" y="-25.277" width="456.563" height="413.031" filterUnits="userSpaceOnUse">
                            <feOffset dx="-9.548" dy="10.239" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="12" result="blur-2"/>
                            <feFlood floodColor="#24272e" floodOpacity="0.349"/>
                            <feComposite operator="in" in2="blur-2"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        <filter id="Layer_64" x="60.246" y="-8.761" width="296" height="303" filterUnits="userSpaceOnUse">
                            <feOffset dx="-9.548" dy="10.239" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="12" result="blur-3"/>
                            <feFlood floodColor="#24272e" floodOpacity="0.349"/>
                            <feComposite operator="in" in2="blur-3"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                    </defs>
                    <g id="Mask_Group_13" data-name="Mask Group 13" transform="translate(-1993 -7112)" clipPath="url(#clip-path-petting)">
                        <g id="Group_1722" data-name="Group 1722" transform="translate(1261 4291)">
                            <motion.g variants={img_purple} transform="matrix(1, 0, 0, 1, 732, 2821)" filter="url(#Layer_63)">
                                <image id="Layer_63-2" data-name="Layer 63" width="206" height="222" transform="translate(53.71 11.38) rotate(14)" xlinkHref="/assets/images/petting-purple.png"/>
                            </motion.g>
                            <motion.g variants={img_green} transform="matrix(1, 0, 0, 1, 732, 2821)" filter="url(#Layer_65)">
                                <rect id="Layer_65-2" data-name="Layer 65" width="318" height="228" transform="translate(35.23 134.88) rotate(-25)" fill="url(#pattern-petting-green)"/>
                            </motion.g>
                            <motion.g variants={img_red} transform="matrix(1, 0, 0, 1, 732, 2821)" filter="url(#Layer_64)">
                                <image id="Layer_64-2" data-name="Layer 64" width="224" height="231" transform="translate(105.79 17)" xlinkHref="/assets/images/petting-red.png"/>
                            </motion.g>
                        </g>
                    </g>
                </svg>


              </div>
              <div className='w-full md:w-3/4'>
                <div className='text-left px-4 py-2 sm:px-9 sm:py-4'>
                  <h1 className='title-text font-cp color-title002'>PETTING SYSTEM</h1>
                  <span className='desc-text color-title003 flex justify-center items-center flex-col'>
                    <p className='w-full font-poppins pb-4'>Your slimes have affection, which can affect the way they are in combat! 
                    Be sure to check in on them from time to time so they know you care!</p>
                </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className='relative p-0 md:p-8 w-11/12'>
            <motion.div variants={divScale} initial="rest" animate="rest" whileInView="play" className='border-style  mx-16 flex flex-wrap justify-center items-center'>
              <div className='w-full md:w-3/4'>
                <div className='text-left px-4 py-2 sm:px-9 sm:py-4 '>
                  <h1 className='title-text font-cp color-title002'>BREEDING</h1>
                  <span className='desc-text color-title003 flex justify-center items-center flex-col'>
                    <p className='w-full font-poppins pb-4'>There are all sorts of combinations when it comes to breeding. 
                    In fact, it’s nearly endless! 
                    Breed your slimes and find out what colourful and adorable offspring’s you’ll get!</p>
                  </span>
                </div>
              </div>
              <div className='w-full md:w-1/4 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 450 304">
                    <defs>
                        <pattern id="pattern-double-slime" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 517 283">
                            <image width="517" height="283" xlinkHref="/assets/images/2-slime.png"/>
                        </pattern>
                        <pattern id="pattern-slime-brown" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 174 170">
                            <image width="174" height="170" xlinkHref="/assets/images/slime-brown.png"/>
                        </pattern>
                    </defs>
                    <g id="Group_1722" data-name="Group 1722" transform="translate(-1057 -3081.789)">
                        <motion.rect variants={double_slime} id="Layer_66" data-name="Layer 66" width="450" height="246" transform="translate(1057 3081.789)" fill="url(#pattern-double-slime)"/>
                        <motion.rect variants={slime_brown} id="Layer_68" data-name="Layer 68" width="151" height="148" transform="translate(1204 3237.789)" fill="url(#pattern-slime-brown)"/>
                    </g>
                </svg>
                {/* <img className='pb-4 md:pb-0' src='/assets/images/breeding-slime.png' alt=''/> */}
              </div>
            </motion.div>
            <motion.img variants={img_hatch_data} initial="rest" animate="rest" whileInView="play" className='absolute -bottom-20 md:-bottom-12 left-0 sm:left-28' src='/assets/images/hatch-data.png' alt=''/>
          </div>
        </div>
    );
}