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
        <div className="flex flex-col  font-custom font-thin glass w-[50%] text-2xl  lg:text-3xl  xl:text-4xl  2xl:text-5xl text-gray-700   pl-[6%] justify-center">
        <div  data-aos="fade-right"  data-aos-easing="linear"
     data-aos-duration="1500"className=''>
      <p> Hi! I am  Mashuq, </p>
      <p> A  front-end</p>
      <p>-developer</p>
       </div>
       
       <div  data-aos="zoom-in-up" data-aos-duration="1500">
            <button data-aos="zoom-in-up" className=' px-8 py-3 mt-8 lg:mt-12  xl:mt-16  2xl:mt-24 hover:font-bold hover:pr-12 duration-1000 text-base  border xl:text-xl 2xl:text-2xl drop-shadow-xl  shadow-xl border-slate-400' >Get Started</button>
          </div>
           </div>
        <div className=" flex ">
      
         
          <a className="myAni" href="https://ibb.co/jyBYX7s"><img className="w-[23vw]    h-[100vh]  " src="https://i.ibb.co/BydJM8F/m44-removebg-preview.png" alt="m44-remove bg-preview" /></a>
          {/* <div className="myAni2 w-[30vw] relative bg-slate-200 drop-shadow-xl shadow-xl shadow-black  h-[100vh] ">
         
               
          </div> */}
         
       
       
      </div>
      </div>
      </>
      
    );
};

export default Banner;