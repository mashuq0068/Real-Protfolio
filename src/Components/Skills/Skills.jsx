import  { useEffect, useState } from "react";

const Skills = () => {
    const [img, setImg] = useState("https://thumbs.dreamstime.com/b/scroll-down-arrow-icon-scrolling-screen-sign-swipe-page-vector-yellow-circles-pattern-classic-geometric-elements-188200600.jpg");
    const [animation, setAnimation] = useState("");
    // const [bg, setBg] = useState("");
    const [name , setName] = useState("")
    const [description , setDescription] = useState("")
    const [isPageLoaded, setPageLoaded] = useState(false);
    const [customCursorPosition , setCustomCursorPosition] = useState({x:0 , y:0})
    const [cursorWidth , setCursorWidth] = useState("w-[40px] h-[40px] border border-black bg-transparent")
    
    useEffect(()=>{
        const changedCursorPosition = (e) => {
            setCustomCursorPosition({x: e.clientX , y:e.clientY})
        }
       
      document.addEventListener('mousemove', changedCursorPosition);

   
    return () => {
      document.removeEventListener('mousemove', changedCursorPosition);
    };
    },[])


    useEffect(() => {
     
      setTimeout(() => {
        setPageLoaded(true);
      }, 500);
    }, []);
  
    
    const sections = [
        { scrollTop: 200, img: "https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png", name:'Html' , description:"HTML is the standard markup language used to create and design web pages.It structures content on the web, defining elements such as headings, paragraphs, images, links, and more.HTML provides a foundation for web development and is often used in conjunction with CSS and JavaScript.", bg: "bg-white" },
        { scrollTop: 500, name:"CSS" , description : "CSS is a stylesheet language used to control the presentation and layout of HTML documents.It defines styles like colors, fonts, spacing, and positioning, allowing developers to create visually appealing and responsive web pages." ,img: "https://i.postimg.cc/q7NqkxbL/css.png", bg: "bg-sky-500" },
        { scrollTop: 700, name:"Javascript" , description : "JavaScript is a versatile programming language that enables dynamic and interactive behavior on the web.It is commonly used for client-side scripting to enhance user interfaces, handle events, and interact with the Document Object Model (DOM)." , img: "https://openclipart.org/image/800px/272343", bg: "bg-yellow-200" },
        { scrollTop: 900, name:"Tailwind" , description : "Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes for styling web elements.It promotes a functional and customizable approach to styling, enabling developers to build modern and responsive designs without writing custom CSS." , img: "https://mythinkpond.com/img/logo/tailwindcss-logo.png", bg: "bg-cyan-300" },
        { scrollTop: 1100, name:"React" , description : "React is a JavaScript library for building user interfaces, developed and maintained by Facebook.It allows developers to create reusable UI components and manage the state of web applications efficiently.React is widely used for building single-page applications and is known for its virtual DOM and component-based architecture." , img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png", bg: "bg-gray-900" },
        { scrollTop: 1300, name:"Github" , description : "GitHub is a web-based platform for version control and collaboration using Git.It provides a platform for hosting and sharing code repositories, facilitating collaboration among developers.GitHub is widely used for open-source projects and serves as a central hub for code development, issue tracking, and project management." , img: "https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png", bg: "bg-white" },
        { scrollTop: 1500, name:"Firebase" , description : "Firebase is a comprehensive platform for developing web and mobile applications, offering various services such as authentication, real-time databases, hosting, and cloud functions.It is known for its ease of use and integration, allowing developers to focus on building features without managing infrastructure." , img: "https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png?compress=1&resize=600x450", bg: "bg-yellow-200" },
    ];

    useEffect(() => {
        const scrollDiv = document.getElementById("scroll-div");
       

        const handleScroll = () => {
           
            for (const section of sections) {
                
                if (scrollDiv.scrollTop > section.scrollTop) {
                    setImg(section.img);
                    // setBg(section.bg);
                    setName(section.name)
                    setDescription(section.description)
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
        <div className={`custom-cursor  duration-1000 ${cursorWidth} ${isPageLoaded ? 'loaded' : ''}`} style={{ left: customCursorPosition.x, top: customCursorPosition.y }}></div>
        <div className={`page-transition ${isPageLoaded ? 'loaded new-page-ani' : ''} `}>
        
        </div>

        <div className={`flex bg-yellow-50 duration-1000 justify-center   main-div items-center h-screen`}>
            <div className="lg:overflow-hidden lg:h-[80vh] mx-auto lg:w-[70vw]">
                <div id="scroll-div" className="h-full  lg:pr-[27px] box-content overflow-y-scroll drop-shadow-xl flex justify-center items-center overflow-x-hidden w-full">
                    <div className="2xl:h-[500vh] h-[100vh] xl:h-[670vh] lg:h-[500vh] lg:relative lg:w-[50vw]">
                        <div className={`2xl:h-[80vh] h-[90vh]  sticky top-2 flex  items-center justify-center`}>
                            <img className={`lg:w-[35%] ${animation} duration-1000 `} src={img} alt="" />
                            <div className=" ml-[5vw]">
                                <h1 className=" 2xl:text-3xl text-center lg:text-2xl text-xl">{name}</h1>
                                <p onMouseLeave={()=>{setCursorWidth("w-[40px] h-[40px] border border-black  bg-transparent")}}    onMouseOverCapture={()=>{{setCursorWidth("w-[150px] duration-1000 border-none bg-red-500 text-white h-[150px]")}}}  className=" 2xl:text-xl text-center mt-[10%] text-base xl:text-lg" >{description}</p>
                            </div>
                        </div>
                        <div className="lg:absolute xl:bottom-14 lg:bottom-20 2xl:bottom-20 xl:left-[45%] lg:left-[35%] 2xl:left-[45%]">
                            <p className="text-black lg:text-lg 2xl:text-xl text-base font-semibold text-center">End.. Scroll Up</p>
                        </div>
                        <div className="lg:absolute left-[50%] bottom-0  w-max mx-auto">
                            <img className="2xl:w-[60px] w-[30px] xl:w-[50px] lg:w-[30px]" src="https://cdn1.iconfinder.com/data/icons/different-arrows-with-background/512/arrow_arrows_up_line_scroll-512.png" alt="" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Skills;
