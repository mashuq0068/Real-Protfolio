import React, { useEffect, useState } from "react";

const Skills = () => {
    const [img, setImg] = useState("https://thumbs.dreamstime.com/b/scroll-down-arrow-icon-scrolling-screen-sign-swipe-page-vector-yellow-circles-pattern-classic-geometric-elements-188200600.jpg");
    const [animation , setAnimation] = useState("")
    const [bg , setBg] = useState("")

    useEffect(() => {
        const scrollDiv = document.getElementById("scroll-div");
       

        const handleScroll = () => {
            if (scrollDiv.scrollTop > 300) {
                setImg("https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png");
                setBg("bg-orange-300")
                setAnimation("ani-bottom")
               
            }
            if (scrollDiv.scrollTop > 500) {
               
                setImg("https://i.postimg.cc/q7NqkxbL/css.png");
                setBg("bg-sky-500")
                setAnimation("ani-bottom")
                
            }
            if (scrollDiv.scrollTop > 700) {
                
                setImg("https://openclipart.org/image/800px/272343");
                setBg("bg-yellow-200")
                setAnimation("ani-bottom")
                
            }
            if (scrollDiv.scrollTop > 900) {
               
                setImg("https://mythinkpond.com/img/logo/tailwindcss-logo.png");
                setBg("bg-gray-300")
                setAnimation("ani-bottom")
               
            }

            if (scrollDiv.scrollTop > 1100) {
                setImg("https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png");
                setBg("bg-gray-800")
                setAnimation("ani-bottom")
            }
            if (scrollDiv.scrollTop > 1300) {
                setImg("https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png");
                setBg("bg-gray-300")
                setAnimation("ani-bottom")
            }
            if (scrollDiv.scrollTop > 1500) {
                setImg("https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png?compress=1&resize=600x450");
                setBg("bg-yellow-200")
                setAnimation("ani-bottom")
            }
        };

        scrollDiv.addEventListener('scroll', handleScroll);

        return () => {
            scrollDiv.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex ${bg} justify-center   duration-2000 main-div items-center h-screen`}>
            <div className="overflow-hidden h-[80vh] w-[40vw]">
            <div id="scroll-div" className="h-full myAni pr-[27px] box-content overflow-y-scroll drop-shadow-xl  overflow-x-hidden w-full">
                <div className="h-[300vh] relative w-[40vw]">
                    <div className="h-[80vh] sticky top-2 flex flex-col items-center justify-center">
                        <img className={`w-[70%]  duration-1000 ${animation}`} src={img} alt="" />
                        
                    </div>
                    <div className="absolute bottom-32 left-[30%]">
                    <p className="text-black text-3xl font-semibold text-center">End.. Scroll Up</p>
                    </div>
                    <div className="absolute left-[40%] bottom-0  space-y-5 w-max mx-auto"> 
                       
                    
                            <img className="w-[100px] " src="https://cdn1.iconfinder.com/data/icons/different-arrows-with-background/512/arrow_arrows_up_line_scroll-512.png" alt="" />
                        </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Skills;
