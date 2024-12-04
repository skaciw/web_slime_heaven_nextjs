import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
    const discord_btn ={
        rest:{
            transform: 'translate(1516.717px, 30.359px) rotate(0deg)',
        },
        play:{
            transform: 'translate(1516.717px, 30.359px) rotate(10deg)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    }
    const connect_btn ={
        rest:{
            transform: 'translate(1762.717px, 30.359px) rotate(0deg)',
        },
        play:{
            transform: 'translate(1762.717px, 30.359px) rotate(10deg)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    }
    const tele_btn ={
        rest:{
            transform: 'translate(1643.717px, 30.359px) rotate(0deg)',
        },
        play:{
            transform: 'translate(1643.717px, 30.359px) rotate(-10deg)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    }
    return (
        <div className="style_navbarWrapper">
            <nav className="style_navbar">
                <Link href="/">
                    <a className='inline-flex items-center '>
                        <img className="logo_navbar" src="/assets/images/logo-navbar.png"  alt="Slime Heaven"/>
                    </a>
                </Link>

                <div className="style_sosmed">
                    {/* <img className="logo_sosmed" src="/assets/images/sosmed-1.png"/> */}
                    <svg className="logo_sosmed" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 489 143">
                        <defs>
                            <clipPath id="clip-path">
                                <rect id="Rectangle_172" data-name="Rectangle 172" width="489" height="143" transform="translate(1431)" fill="#fff" stroke="#707070" strokeWidth="1"/>
                            </clipPath>
                            <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1516 362">
                                <image width="1516" height="362" xlinkHref="/assets/images/Mask%20Group%2013-image.png"/>
                            </pattern>
                            <radialGradient id="radial-gradient" cx="0.481" cy="0.657" r="2.667" gradientTransform="translate(0.342) scale(0.317 1)" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#a48a7b"/>
                                <stop offset="1" stopColor="#fff"/>
                            </radialGradient>
                            <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#edd6b9"/>
                                <stop offset="1" stopColor="#d4b492"/>
                            </linearGradient>
                            <radialGradient id="radial-gradient-2" cx="0.34" cy="1.138" r="1.589" gradientTransform="translate(0.131) scale(0.738 1)" xlinkHref="#radial-gradient"/>
                            <radialGradient id="radial-gradient-3" cx="0.767" cy="0.467" r="0.855" gradientTransform="translate(-0.055) scale(1.11 1)" xlinkHref="#radial-gradient"/>
                            <linearGradient id="linear-gradient-2" x1="0.487" y1="0.7" x2="0.628" y2="0.179" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#bf9f7e"/>
                                <stop offset="1" stopColor="#edd6b9"/>
                            </linearGradient>
                            <linearGradient id="linear-gradient-3" x1="0.664" y1="0.423" x2="0.225" y2="0.79" xlinkHref="#linear-gradient-2"/>
                            <radialGradient id="radial-gradient-4" cx="0.348" cy="1.021" r="1.509" gradientTransform="translate(0.133) scale(0.734 1)" gradientUnits="objectBoundingBox">
                                <stop offset="0"/>
                                <stop offset="1" stopColor="#a3805f"/>
                            </radialGradient>
                            <radialGradient id="radial-gradient-5" cx="0.861" cy="0.211" r="1.027" gradientTransform="translate(-0.099) scale(1.197 1)" xlinkHref="#radial-gradient-4"/>
                            <radialGradient id="radial-gradient-6" cx="0.5" cy="0.5" r="2.257" gradientTransform="translate(0.356) scale(0.289 1)" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#ca9e67"/>
                                <stop offset="1"/>
                            </radialGradient>
                            <radialGradient id="radial-gradient-7" cx="0.5" cy="0.5" r="1.307" gradientTransform="translate(0.359) scale(0.281 1)" xlinkHref="#radial-gradient-6"/>
                            <filter id="Rectangle_3" x="211.217" y="28.859" width="92.283" height="92.283" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <filter id="Rectangle_4" x="84.217" y="28.859" width="92.283" height="92.283" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-2"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-2"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <filter id="Rectangle_2" x="330.217" y="28.859" width="92.283" height="92.283" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-3"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-3"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                        </defs>
                        <g id="Mask_Group_13" data-name="Mask Group 13" transform="translate(-1431)" clipPath="url(#clip-path)">
                            <rect id="Image_7" data-name="Image 7" width="509" height="122" transform="translate(1431 -28)" fill="url(#pattern)"/>
                            <g id="Group_1141" data-name="Group 1141" transform="translate(-3991.044 -2877.454)">
                            <path id="Path_2098" data-name="Path 2098" d="M5494.459,3019.985c50.341-1.288,340.854-2.073,386.371.2,1.042.052,2.413.171,3.173-.542s.7-2.061.717-3.1c.052-3.435.255-7.375.115-10.118l-10.07-.9,9.908-2.348q-1.384-28.129-1.9-56.583l-5.372-1.868,5.311-1.773c-.418-26.978,1.548-9,2.5-35.9a95.743,95.743,0,0,0-9.388-17.682,3.291,3.291,0,0,0-2.992-1.678c-20.112,1.806-364.324,3.79-400.589,1.978a3.6,3.6,0,0,0-3.594,3.615c-.191,7.919.676,13.063.948,20.606l3.9,2.468-1.756,2.308.32,1.779-2.2,1.542c.836,28.08.747,12.871-.258,40.731l2.942,1.535-1.472,2.7,4.163,2.114-5.941,1.514c-.472,11.153-2.185,22.41-2.265,33.27,6.009,6.322,18.019,13.03,27.426,16.129Z" fillRule="evenodd" fill="url(#radial-gradient)" style={{isolation:"isolate",mixBlendMode:"multiply"}}/>
                            <g id="Group_1140" data-name="Group 1140">
                                <path id="Path_2099" data-name="Path 2099" d="M5494.613,3015.081c7.487,1.807,364.985.909,393.79-1.08q-.339-5.517-.641-11.053l-10.314-.857,10.147-2.239q-1.417-26.828-1.947-53.963l-5.5-1.782,5.441-1.691c-.429-25.729-.207-8.363.77-34.022l-13.108-18.353c-1.8-.768-378.259.7-407.773,1.795q.754,12.447,1.234,24.862l4,2.354-1.8,2.2.328,1.7-2.253,1.47c.857,26.78.766,10.276-.264,36.847l3.014,1.464-1.507,2.579,4.263,2.016-6.085,1.444q-.75,16.534-1.985,33.013v.021l30.195,13.277Z" fillRule="evenodd" fill="url(#linear-gradient)"/>
                                <path id="Path_2100" data-name="Path 2100" d="M5494.6,3015.072l-30.2-13.275c.942-1.445,10.351-8.887,11.638-9.021,1.24-.128,15.428,19.562,18.557,22.3Z" fillRule="evenodd" fill="url(#radial-gradient-2)" style={{isolation:"isolate",mixBlendMode:"multiply"}}/>
                                <path id="Path_2101" data-name="Path 2101" d="M5886.356,2908.394c-3.015-1.438-15.891-3.537-16.487-4.852-.47-1.035,2.692-9.864,3.379-13.5q6.554,9.175,13.108,18.352Z" fillRule="evenodd" fill="url(#radial-gradient-3)" style={{isolation:"isolate",mixBlendMode:"multiply"}}/>
                                <path id="Path_2102" data-name="Path 2102" d="M5474.244,2995.891a250.116,250.116,0,0,0,20.369,19.19c-2.224,0-30.21-11.089-30.21-13.284a55.721,55.721,0,0,1,9.841-5.906Z" fillRule="evenodd" fill="url(#linear-gradient-2)"/>
                                <path id="Path_2103" data-name="Path 2103" d="M5886.356,2908.394c-5.166-2.321-10.357-4.593-15.326-7.309a107.09,107.09,0,0,0,2.218-11.043c1.276,0,13.108,16.982,13.108,18.352Z" fillRule="evenodd" fill="url(#linear-gradient-3)"/>
                                <path id="Path_2104" data-name="Path 2104" d="M5488.313,3012.309c-1.736-6.284-15.268-13.963-19.842-13.289a51.993,51.993,0,0,1,5.773-3.129,250.563,250.563,0,0,0,20.317,19.148l.052.042a36.729,36.729,0,0,1-6.14-1.944,5.052,5.052,0,0,0-.16-.826v0Z" fillRule="evenodd" fill="url(#radial-gradient-4)" style={{isolation:"isolate",mixBlendMode:"screen"}}/>
                                <path id="Path_2105" data-name="Path 2105" d="M5873.075,2899.848c1.516,3.505,8.144,5.986,12.163,6.98.155.039.307.075.454.109a4.953,4.953,0,0,1,.664,1.456c-.123-.058-.263-.121-.419-.188-5.028-2.255-10.073-4.477-14.907-7.12a107.056,107.056,0,0,0,2.218-11.044.709.709,0,0,1,.349.185c-.024.067-.047.136-.071.206-.825,2.5-1.484,7.033-.451,9.416Z" fillRule="evenodd" fill="url(#radial-gradient-5)" style={{isolation:"isolate",mixBlendMode:"screen"}}/>
                                <path id="Path_2106" data-name="Path 2106" d="M5498.2,3011.692c-3.578-1.429-4.9-4.453-6.817-9.079-5.5-13.239-12.686-10.86-18.446-14.475-3.843-2.411-5.049-9.692,2.058-19.479,6.563-9.04-5.353-19.026-4.933-37.941.269-12.108,6.759,11.939,7.823,6.3.983-5.213,2.207-7.989-2.731-15.412-1.907-2.867.236-4.2-4.435-11.465-2.446-3.806-1.67-6.5.728-8.462,14.147-11.554,50.259-4.186,66.22-2.674,7.273.689,12.532-3.953,24.515-2.8,21.425,2.057,18.116-8.435,48.926,4.227,20.117,8.267,198.7-5.27,215.779-3.831,8.577.723,11.475-1.168,16.942-1.8,4.217-.487,8.627-1.181,12.275-.088,7.555,2.263,3.988,9.762,10.5,14.358,9.368,6.609,19.564-2.617,14.924,16.628-2.331,9.671-5.077,20.917-.68,32.9,1.268,3.456,1.246-31-.185-27.807-5.715,12.745-11,10.765-3.41,18.046,6.187,5.938-2.523,10.818,1.937,17.469,4.315,6.435,2.265,12.692-2.522,25.844-.65,1.787,2.572,3.976-3.432,7.478-4.188,2.442,10.655,9.455-22.884,9.455-9.522,0-12.45,3.371-22.065,3.083-16.57-.5-201.364-5.184-221.872-3.363-13.388,1.189-20.071,3.134-34.378,2.522-8.5-.363-10.253,2.347-21.833-1.049-17.582-5.154-36.075,7.78-52,1.417Z" fillRule="evenodd" opacity="0.5" fill="url(#radial-gradient-6)" style={{isolation:"isolate",mixBlendMode:"screen"}}/>
                                <path id="Path_2107" data-name="Path 2107" d="M5483.335,2986.493c-4.614-4.157-6.827-7.326-3.651-18.9,4.722-17.2-4.529-21.556-5.543-32.263-1.3-13.735-.226,36.164,4.722,26.467,3.054-5.986-5.11-7.855,4.375-19.1,7.056-8.368,5.35-15.181-1.08-22.843-5.2-6.2-5.807-14.7-.225-18.821,8.711-6.426,18.677.835,25.511,1.251,2.054.126,4.681-.364,9-2.035,4.923-1.905,17.335,5.149,27.05,5.149,11.883,0,24.53-6.768,41.715-6.768,17.914,0,22.921,15.192,38.379,8.815,1.72-.71,187.8,6.449,203.349-1.692,12.383-6.483,29.325-3.654,32.81,2.828.951,1.767,7.484.261,8.647,10.354.507,4.4,11.43,7.216,4.963,19.081-1.185,2.176-2.007,14.738.113,18.5,2.429,4.31,2.419-29.221-.113-25.484-7.167,10.579,3.077,19.264-2.191,26.953-5.336,7.786-.774,13.993-.774,19.935,0,12.5-4.435,4.913-1.95,17.106,2.168,10.637-6.611,12.095-15.857,9.96-2.72-.628-5.038-1.249-10.814,2.961-8.685,6.333-21.316,2.283-31.264-.721-13.82-4.173-198.1-3.962-212.514.292-9.786,2.888-25.861-7.229-42.09-1.444-14.171,5.05-20.4-5.928-30.692.8-7.889,5.157-15.516,3.868-18.968.379-4.405-4.451.736,1.123-6.084-8.251-6.58-9.047-14.48-10.385-16.824-12.5Z" fillRule="evenodd" opacity="0.5" fill="url(#radial-gradient-7)" style={{isolation:"isolate",mixBlendMode:"screen"}}/>
                            </g>
                            </g>
                            <a href="https://www.instagram.com/slimehavengame?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
                                <motion.g variants={tele_btn} initial="rest" animate="rest" whileHover="play" id="Component_2_1" data-name="Component 2 – 1" transform="translate(1643.717 30.359)">
                                    <g id="Group_7" data-name="Group 7" transform="matrix(0.966, 0.259, -0.259, 0.966, -1571.519, -465.144)">
                                        <g transform="matrix(0.97, -0.26, 0.26, 0.97, 1425.03, 68.29)" filter="url(#Rectangle_3)">
                                        <g id="Rectangle_3-2" data-name="Rectangle 3" transform="matrix(0.97, 0.26, -0.26, 0.97, 230.32, 30.36)" fill="#d6bc98" stroke="#572b0c" strokeWidth="3">
                                            <rect width="68" height="68" rx="10" stroke="none"/>
                                            <rect x="1.5" y="1.5" width="65" height="65" rx="8.5" fill="none"/>
                                        </g>
                                        </g>
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" transform="translate(1671 49) scale(0.09)" fill="#572b0c" />
                                    </g>
                                </motion.g>
                            </a>
                            <a href="https://discord.gg/slimehaven" target="_blank" rel="noreferrer">
                                <motion.g variants={discord_btn} initial="rest" animate="rest" whileHover="play" id="Component_3_1" data-name="Component 3 – 1" transform="translate(1516.717 30.359)">
                                    <g id="Group_8" data-name="Group 8" transform="matrix(0.966, -0.259, 0.259, 0.966, -1486.116, 376.463)">
                                        <g transform="matrix(0.97, 0.26, -0.26, 0.97, 1457.97, -30.51)" filter="url(#Rectangle_4)">
                                        <g id="Rectangle_4-2" data-name="Rectangle 4" transform="matrix(0.97, -0.26, 0.26, 0.97, 85.72, 47.96)" fill="#d6bc98" stroke="#572b0c" strokeWidth="3">
                                            <rect width="68" height="68" rx="10" stroke="none"/>
                                            <rect x="1.5" y="1.5" width="65" height="65" rx="8.5" fill="none"/>
                                        </g>
                                        </g>
                                        <path id="Path_2055" data-name="Path 2055" d="M3236.2,1007.6c-1.472-.519-2.939-1.071-4.446-1.464-1.679-.439-1.267-.468-2.007.891a.8.8,0,0,1-.578.36c-1.669-.008-3.35-.171-5.008-.048-.991.076-1.579-.072-1.861-1.058-.1-.363-.375-.464-.75-.346-1.737.542-3.484,1.048-5.211,1.624a1.832,1.832,0,0,0-.857.731,24.861,24.861,0,0,0-4.157,16.121,1.2,1.2,0,0,0,.418.771,24.126,24.126,0,0,0,6.838,3.487l0,0a.525.525,0,0,0,.7-.238c.38-.619.75-1.241,1.151-1.847.284-.431.173-.635-.288-.819-.645-.255-1.255-.583-1.881-.881l.052-.235a2.087,2.087,0,0,1,.765.012,18.279,18.279,0,0,0,7.5,1.487,17.508,17.508,0,0,0,6.713-1.492c.329-.142.594-.2.87.235-.693.323-1.346.633-2.007.929-.269.12-.474.239-.269.573.432.695.842,1.406,1.307,2.08a.674.674,0,0,0,.6.18,23.33,23.33,0,0,0,6.944-3.509,1.116,1.116,0,0,0,.364-.635,7.629,7.629,0,0,0,.1-1.221h0a25.037,25.037,0,0,0-4.35-15.141A1.459,1.459,0,0,0,3236.2,1007.6Zm-13.153,12.971a2.572,2.572,0,0,1-.2.194,2.385,2.385,0,0,1-3.365-.24,3.2,3.2,0,0,1-.011-4.152,2.282,2.282,0,0,1,2.531-.711,2.66,2.66,0,0,1,1.83,2.323,3.44,3.44,0,0,1,.021.4A2.979,2.979,0,0,1,3223.044,1020.567Zm10.626-1.36a2.65,2.65,0,0,1-2.232,2.12h-.018a2.68,2.68,0,0,1-2.8-2.546c-.007-.112,0-.223,0-.336a2.944,2.944,0,0,1,.882-2.211,2.368,2.368,0,0,1,3.019-.285A3.049,3.049,0,0,1,3233.67,1019.207Z" transform="translate(-1663.87 -945.791)" fill="#572b0c"/>
                                    </g>
                                </motion.g>
                            </a>
                            <motion.g variants={connect_btn} initial="rest" animate="rest" whileHover="play" id="Component_1_1" data-name="Component 1 – 1" transform="translate(1762.717 30.359)">
                                <g id="Group_6" data-name="Group 6" transform="matrix(0.966, -0.259, 0.259, 0.966, -1723.734, 440.132)">
                                    <g transform="matrix(0.97, 0.26, -0.26, 0.97, 1466.36, -94.18)" filter="url(#Rectangle_2)">
                                    <g id="Rectangle_2-2" data-name="Rectangle 2" transform="matrix(0.97, -0.26, 0.26, 0.97, 331.72, 47.96)" fill="#d6bc98" stroke="#572b0c" strokeWidth="3">
                                        <rect width="68" height="68" rx="10" stroke="none"/>
                                        <rect x="1.5" y="1.5" width="65" height="65" rx="8.5" fill="none"/>
                                    </g>
                                    </g>
                                    <path id="Icon_material-account-balance-wallet" data-name="Icon material-account-balance-wallet" d="M31.5,27v1.5a3.009,3.009,0,0,1-3,3H7.5a3,3,0,0,1-3-3V7.5a3,3,0,0,1,3-3h21a3.009,3.009,0,0,1,3,3V9H18a3,3,0,0,0-3,3V24a3,3,0,0,0,3,3ZM18,24H33V12H18Zm6-3.75A2.25,2.25,0,1,1,26.25,18,2.247,2.247,0,0,1,24,20.25Z" transform="translate(1789.609 53.5)" fill="#572b0c"/>
                                </g>
                            </motion.g>
                        </g>
                    </svg>
                </div>
            </nav>
        </div>
    );
}