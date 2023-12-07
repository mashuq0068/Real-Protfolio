import { useEffect, useState } from "react";


const Projects = () => {
  const [isPageLoaded, setPageLoaded] = useState(false);
  const [customCursorPosition , setCustomCursorPosition] = useState({x:0 , y:0})
  const [cursorWidth , setCursorWidth] = useState("w-[40px] h-[40px] border border-black bg-transparent")
  const [hoverProjectOne , setHoverProjectOne] = useState(false)
  const [hoverProjectTwo , setHoverProjectTwo] = useState(false)
  const [hoverProjectThree , setHoverProjectThree] = useState(false)
  
  
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
    // Simulate page loading
    setTimeout(() => {
      setPageLoaded(true);
    }, 500);
  }, []);

    return (
      <>
      <h1 className="lg:hidden block text-2xl bg-yellow-50 text-center pt-[20vh] pb-[5vh]">Projects</h1>
       <div className={`custom-cursor lg:block hidden duration-1000 ${cursorWidth} ${isPageLoaded ? 'loaded' : ''}`} style={{ left: customCursorPosition.x, top: customCursorPosition.y }}></div>
      <div className={`page-transition ${isPageLoaded ? 'loaded new-page-ani' : ''} `}>
        
        </div>
      <div className="bg-yellow-50  flex justify-center items-center lg:h-screen w-full">
        {/* all projects div */}
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 ani-right md:gap-[5vw] gap-[5vh] lg:gap-[10%]">
          {/* first project */}
        <div onMouseLeave={()=>{setHoverProjectOne(false)}} onMouseEnter={()=>{setHoverProjectOne(true)}} className=" cursor-pointer  lg:w-[20vw] w-[90vw] md:w-[45vw] relative shadow-lg shadow-black">
         <div className=" bg-yellow-50">
         <img className=" h-[30vh] w-max mx-auto " src="https://i.ibb.co/yfdXV9Y/depositphotos-200340872-stock-photo-attractive-young-male-female-models-removebg-preview.png" alt="" />
         </div>
          <div className="p-[6%] 2xl:spacing">
          <h1 className=" 2xl:text-2xl lg:text-xl text-lg text-center font-bold mb-[5%]">Life Puls</h1>
          <p className=" 2xl:text-xl text-center">
          An immersive and meticulously crafted platform designed to serve the journey of finding their life partner.
          </p>
          </div>
          <div className={`${hoverProjectOne ? "block ani-hover" : "hidden" } bg-amber-950 flex flex-col gap-[6%] justify-center items-center absolute bottom-0 right-0 h-full w-full`}>
            <a href="https://brand-shop-fd7b2.web.app" className="2xl:text-xl lg:text-lg text-white px-6 py-2 rounded-3xl drop-shadow-xl shadow-xl bg-black">Go Live</a>
            <a href="https://github.com/mashuq0068/life-puls-client" className="2xl:text-xl lg:text-lg text-white px-6 py-2 rounded-3xl drop-shadow-xl shadow-xl bg-black">Github</a>
          
          </div>
        </div>
          {/* first project */}
        <div onMouseLeave={()=>{setHoverProjectTwo(false)}} onMouseEnter={()=>{setHoverProjectTwo(true)}} className=" lg:w-[20vw] w-[90vw] md:w-[45vw] cursor-pointer relative  shadow-lg shadow-black">
         <div className="  ">
         {/* <img className=" h-[30vh] w-max mx-auto " src="https://i.ibb.co/Yjt4xjd/Screenshot-2023-12-08-000744.png" alt="" /> */}
         <img className="h-[30vh] pb-[3vh] pt-[2vh] w-max mx-auto " src="https://i.ibb.co/kqZk0Db/Screenshot-2023-12-08-000550.png" alt="" />
         </div>
          <div className="p-[6%]">
          <h1 className=" 2xl:text-2xl lg:text-xl text-lg text-center  font-bold mb-[5%]"> Eat Together</h1>
          <p className=" 2xl:text-xl text-center ">
          A cutting-edge online platform revolutionizing culinary sharing foods to  exchange their gastronomic creations seamlessly
          </p>
          </div>
          <div className={`${hoverProjectTwo? "block ani-hover" : "hidden" } bg-amber-950 flex flex-col gap-[6%] justify-center items-center absolute bottom-0 right-0 h-full w-full`}>
            <a href="https://fir-practice-email-pass.web.app" className="2xl:text-xl lg:text-lg text-white px-6 py-2 rounded-3xl drop-shadow-xl shadow-xl bg-black">Go Live</a>
            <a href="https://github.com/mashuq0068/food-sharing-client" className="2xl:text-xl lg:text-lg text-white px-6 py-2 rounded-3xl drop-shadow-xl shadow-xl bg-black">Github</a>
          
          </div>
        </div>
          {/* first project */}
        <div onMouseLeave={()=>{setHoverProjectThree(false)}} onMouseEnter={()=>{setHoverProjectThree(true)}} className="lg:w-[20vw] bg-yellow-50 w-[90vw] md:w-[45vw] cursor-pointer  relative  shadow-lg shadow-black">
         <div className=" ">
         <img className=" h-[30vh] w-max mx-auto " src="https://i.ibb.co/4VjXd7n/Screenshot-2023-12-08-001829.png" alt="" />
         </div>
          <div className="p-[6%]">
          <h1 className=" 2xl:text-2xl lg:text-xl text-lg text-center font-bold mb-[5%]"> Event Manager</h1>
          <p className=" 2xl:text-xl  text-center  ">
          An immersive and meticulously crafted platform designed to serve as the quintessential conduit .
          </p>
          </div>
          <div className={`${hoverProjectThree ? "block ani-hover" : "hidden" } bg-amber-950 flex flex-col gap-[6%] justify-center items-center absolute bottom-0 right-0 h-full w-full`}>
            <a href="https://corporate-event-manager.web.app" className="2xl:text-xl lg:text-lg text-white px-6 py-2 rounded-3xl drop-shadow-xl shadow-xl bg-black">Go Live</a>
            <a href="https://github.com/mashuq0068/event-management-client" className="2xl:text-xl lg:text-lg text-white px-6 py-2 rounded-3xl drop-shadow-xl shadow-xl bg-black">Github</a>
          
          </div>
        </div>
        

      </div>
      </div>
        </>
    );
};

export default Projects;