import  { useEffect, useState } from "react";

const Skills = () => {
    const [img, setImg] = useState("https://thumbs.dreamstime.com/b/scroll-down-arrow-icon-scrolling-screen-sign-swipe-page-vector-yellow-circles-pattern-classic-geometric-elements-188200600.jpg");
    const [animation, setAnimation] = useState("");
    const [bg, setBg] = useState("");
    const [isPageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
     
      setTimeout(() => {
        setPageLoaded(true);
      }, 500);
    }, []);
  
    
    const sections = [
        { scrollTop: 200, img: "https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png", bg: "bg-white" },
        { scrollTop: 500, img: "https://i.postimg.cc/q7NqkxbL/css.png", bg: "bg-sky-500" },
        { scrollTop: 700, img: "https://openclipart.org/image/800px/272343", bg: "bg-yellow-200" },
        { scrollTop: 900, img: "https://mythinkpond.com/img/logo/tailwindcss-logo.png", bg: "bg-cyan-300" },
        { scrollTop: 1100, img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png", bg: "bg-gray-900" },
        { scrollTop: 1300, img: "https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png", bg: "bg-white" },
        { scrollTop: 1500, img: "https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png?compress=1&resize=600x450", bg: "bg-yellow-200" },
    ];

    useEffect(() => {
        const scrollDiv = document.getElementById("scroll-div");
       

        const handleScroll = () => {
           
            for (const section of sections) {
                
                if (scrollDiv.scrollTop > section.scrollTop) {
                    setImg(section.img);
                    setBg(section.bg);
                    setAnimation("ani-bottom");
                    
                }
                
            }
        };

        scrollDiv.addEventListener('scroll', handleScroll);

        return () => {
            scrollDiv.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div className={`page-transition ${isPageLoaded ? 'loaded new-page-ani' : ''} `}>
        
        </div>
        <div className={`flex ${bg} duration-1000 justify-center  main-div items-center h-screen`}>
            <div className="lg:overflow-hidden lg:h-[80vh] lg:w-[40vw]">
                <div id="scroll-div" className="h-full  lg:pr-[27px] box-content overflow-y-scroll drop-shadow-xl overflow-x-hidden w-full">
                    <div className="2xl:h-[300vh] h-[100vh] xl:h-[370vh] lg:h-[500vh] lg:relative lg:w-[40vw]">
                        <div className={`lg:h-[80vh]  sticky top-2 flex flex-col items-center justify-center`}>
                            <img className={`lg:w-[70%] ${animation} duration-1000 `} src={img} alt="" />
                        </div>
                        <div className="lg:absolute xl:bottom-24 lg:bottom-20 2xl:bottom-32 xl:left-[25%] lg:left-[20%] 2xl:left-[30%]">
                            <p className="text-black lg:text-3xl text-base font-semibold text-center">End.. Scroll Up</p>
                        </div>
                        <div className="lg:absolute left-[40%] bottom-0  w-max mx-auto">
                            <img className="2xl:w-[90px] w-[30px] xl:w-[70px] lg:w-[50px]" src="https://cdn1.iconfinder.com/data/icons/different-arrows-with-background/512/arrow_arrows_up_line_scroll-512.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Skills;
