import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Banner = () => {
    useEffect(()=>{
        Aos.init();
    },[])
   
    return (
        <>
        <div className=" flex justify-between font-nosifer ">
        <div className="flex flex-col items-left  font-custom font-thin glass md:text-4xl lg:w-[50%] w-[80%] md:w-[90%] lg:text-3xl text-2xl  xl:text-4xl  2xl:text-5xl text-gray-700   pl-[6%] justify-center">
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
      </div>
      </>
      
    );
};

export default Banner;