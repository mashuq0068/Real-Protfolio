import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import resumePdf from "../../../src/Md. Mashuqur rahman (10).pdf"


const Banner = () => {
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
    useEffect(()=>{
        Aos.init();
    },[])
   
    return (
        <>
        <div className={`custom-cursor lg:block hidden  duration-1000 ${cursorWidth}` }style={{ left: customCursorPosition.x, top: customCursorPosition.y }}>
        </div>
        {/* <div className=" flex justify-between font-nosifer ">
        <div className="flex flex-col items-left  font-custom font-thin  md:text-4xl lg:w-[50%] w-[80%] md:w-[90%] lg:text-3xl text-2xl  xl:text-4xl  2xl:text-5xl text-gray-700   pl-[6%] justify-center">
        <div  data-aos="fade-right"  data-aos-easing="linear"
     data-aos-duration="1500"className=''>
      <p> Hi! I am  Mashuq, </p>
      <p> A  front-end</p>
      <p>-developer</p>
       </div>
       
       
       <div  data-aos="zoom-in-up" data-aos-duration="1500">
            <button data-aos="zoom-in-up" className='px-2 py-1 lg:px-8 lg:py-3 mt-8 lg:mt-12  xl:mt-16  2xl:mt-24 hover:font-bold hover:pr-12 duration-1000 text-base  border xl:text-xl 2xl:text-2xl drop-shadow-xl shadow-xl border-slate-400' >Get Started</button>
          </div>
           </div>
        <div className=" flex ">
      
         
          <a className="myAni" href="https://ibb.co/jyBYX7s"><img className="lg:w-[23vw]    lg:h-[100vh]  " src="https://i.ibb.co/BydJM8F/m44-removebg-preview.png" alt="m44-remove bg-preview" /></a>
         
         
       
       
      </div>
      </div> */}
      <div className=" bg-yellow-50 flex md:flex-row flex-col lg:w-[75vw] z-10 lg:h-screen  items-center  justify-between px-[10%] md:px-[8%] lg:pt-0 pt-0 md:pt-[10vh] lg:gap-0 gap-0 md:gap-[10%] lg:px-[15%]">
      <div className=" z-10">
          <p data-aos="fade-right" data-aos-duration="2500"onMouseLeave={()=>{setCursorWidth("w-[40px] h-[40px]  border border-black  bg-transparent")}}    onMouseEnter={()=>{{setCursorWidth("w-[150px] duration-1000 border-none bg-red-500  h-[150px] ")}}} className=" 2xl:text-4xl md:text-3xl md:text-left text-center lg:mt-0 mt-[5vh] text-2xl lg:w-[25vw]">
            H1! I am Mashuq. A professional front-end-developer
          </p>
          <a href={resumePdf} download> <button  data-aos="fade-right" data-aos-duration="2500" className=" md:w-auto w-max md:mx-0 mx-auto 2xl:text-xl flex items-center btn bg-amber-950 text-white  capitalize border-none hover:bg-amber-950 overflow-hidden md:mb-0 mb-[5vh] lg:pr-3 md:px-4 lg:py-2 py-3 lg:pl-6 h-[5vh] lg:text-lg md:rounded-lg lg:rounded-xl border border-gray-500 mt-[10%]">  Resume <FaRegEdit /></button>
          </a> 

        </div>
        <img id="picture-ani" className="lg:w-[20vw] ani-bounce2 md:w-[40vw] w-[80vw] relative picture-ani  pt-[3%] drop-shadow-xl shadow-xl shadow-black" src="https://i.ibb.co/kcw59mG/Screenshot-2023-12-06-153908-removebg-preview.png" alt="" />
     
        
      </div>
      {/* <div onMouseLeave={()=>{setCursorWidth("w-[40px] h-[40px]  border border-black  bg-transparent")}}    onMouseEnter={()=>{{setCursorWidth("w-[150px] duration-1000 border-none bg-red-500  h-[150px] ")}}}  className=" absolute bottom-[5%] 2xl:text-lg  text-center left-[10%] mx-auto w-[60vw] text-base lg:block hidden">
      All content © [Mashuq protfolio] [2023]. Unauthorized use or reproduction is strictly prohibited. Protected by applicable copyright laws. All rights reserved.
      </div> */}
      
      </>
      
    );
};

export default Banner;