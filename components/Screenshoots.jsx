import React,{useState} from "react";
//  const url = "/assets/images/ss_img_1.jpg";
export const Screenshoots = () =>{
    const [index,setIndex] = useState(0);

    const url = [
        "/assets/images/ss_img_1.jpg",
        "/assets/images/ss_img_2.jpg",
        "/assets/images/ss_img_3.jpg",
        "/assets/images/ss_img_4.jpg",
        "/assets/images/ss_img_5.jpg",
        "/assets/images/ss_img_6.jpg",
    ]

    const handleClick = (x) =>{
        setIndex(x.target.id);
        
        const btn = document.querySelectorAll('.btn_slime');
        for (let i = 0 ; i < btn.length; i++){
            btn[i].classList.remove('selected');
        }   
        x.currentTarget.classList.add('selected');

    }

    return(
        <div className='bg-ss container mx-auto flex justify-center items-center'>
            <svg className="p-4 lg:p-10 mt-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1780 921.045">
                <defs>
                    <pattern id="pattern-ss" width="1" height="1" viewBox="16.287 0 1163.713 829.972">
                        <image preserveAspectRatio="none" width="1180" height="841.589" xlinkHref="/assets/images/ss_board.png"/>
                    </pattern>
                    <clipPath id="clip-path-ss">
                        <rect id="Rectangle_133" data-name="Rectangle 133" width="1012" height="634" transform="translate(458 1421)" fill="#fff" stroke="#707070" strokeWidth="1"/>
                    </clipPath>
                    <pattern id="pattern-ss-2" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1920 1080">
                        <image width="1920" height="1080" xlinkHref="/assets/images/ss_img_1.jpg"/>
                    </pattern>
                    <pattern id="pattern-ss-3" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1920 1080">
                        <image width="1920" height="1080" xlinkHref="/assets/images/ss_img_2.jpg"/>
                    </pattern>
                    <pattern id="pattern-ss-4" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1920 1080">
                        <image width="1920" height="1080" xlinkHref="/assets/images/ss_img_4.jpg"/>
                    </pattern>
                    <pattern id="pattern-ss-5" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1920 1080">
                        <image width="1920" height="1080" xlinkHref="/assets/images/ss_img_6.jpg"/>
                    </pattern>
                    <image id="image-ss-5" width="144" height="81" xlinkHref="/assets/images/ss_img_5.jpg"/>
                    <image id="image-ss-3-2" width="144" height="81" xlinkHref="/assets/images/ss_img_3.jpg"/>
                </defs>
                <g id="Group_1722" data-name="Group 1722" transform="translate(127 -1197.955)">
                    <rect id="Layer_40" data-name="Layer 40" width="1180" height="841.589" transform="translate(243 1197.955)" fill="url(#pattern-ss)"/>
                    <image id="Rmain" width="349" height="378" transform="translate(-57 1741)" xlinkHref="/assets/images/brown_slime01.png"/>
                    <g id="Mask_Group_1" data-name="Mask Group 1" transform="translate(-127 -62)" >
                        <g id="Component_5_1" data-name="Component 5 – 1" transform="translate(500 1421)">
                            <image id="battle_screen" data-name="battle_screen" width="920" height="518" xlinkHref={url[index]}/>
                            <rect className="btn_slime selected" onClick={handleClick} id="0" data-name="btn_slime_1" width="145" height="81" transform="translate(0 530)" fill="url(#pattern-ss-2)"/>
                            <use className="btn_slime" onClick={handleClick} id="1" data-name="btn_slime_2" transform="translate(155 530)" xlinkHref="#image-ss-3-2" />
                            <rect className="btn_slime" onClick={handleClick} id="2" data-name="btn_slime_3" width="145" height="81" transform="translate(310 530)" fill="url(#pattern-ss-3)" />
                            <rect className="btn_slime" onClick={handleClick} id="3" data-name="btn_slime_4" width="145" height="81" transform="translate(465 530)" fill="url(#pattern-ss-4)"/>
                            <use className="btn_slime" onClick={handleClick} id="4" data-name="btn_slime_5" transform="translate(621 530)" xlinkHref="#image-ss-5" />
                            <rect className="btn_slime" onClick={handleClick} id="5" data-name="btn_slime_6" width="145" height="81" transform="translate(775 530)" fill="url(#pattern-ss-5)" />
                        </g>
                    </g>
                    <image id="Image_2" data-name="Image 2" width="570" height="83" transform="translate(548 1208)" xlinkHref="/assets/images/screenshoot.png"/>
                </g>
            </svg> 
        </div>
    );
    
}