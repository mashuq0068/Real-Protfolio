import { NavLink, Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="flex relative">
           <div className="flex-1">
           <Outlet className="flex-1"></Outlet>
           </div>
        <div className=" h-[100vh] lg:flex hidden flex-col xl:text-[18px] gap-8 2xl:text-2xl text-base bg-yellow-50   w-[25vw] items-start pl-[3vw] relative font-notify   drop-shadow-xl shadow-xl    ">
           <NavLink to='/' className={`mt-[18vh] focus:pl-3 focus:animate-none focus:pr-[80%]  focus:bg-amber-950 focus:text-white spacing  focus:py-2  hover:bg-yellow-950 hover:text-white hover:pl-3 hover:pr-[80%] hover:py-2  hover:animate-none duration-1000`} >Home</NavLink>
           <NavLink className=' spacing  focus:pl-3 focus:animate-none focus:pr-[80%]  focus:bg-amber-950 focus:text-white hover:bg-yellow-950 hover:text-white hover:pl-3 hover:pr-[80%] focus:py-2  hover:py-2  hover:animate-none duration-1000' to='/info'>About</NavLink>
           <NavLink className=' spacing focus:pl-3 focus:animate-none focus:pr-[70%]  duration-1000 focus:bg-amber-950 focus:text-white  hover:bg-yellow-950 hover:text-white focus:py-2  hover:pl-3 hover:pr-[70%] hover:py-2  hover:animate-none' to='/projects'>Projects</NavLink>
           <NavLink className=' spacing focus:pl-3 focus:animate-none focus:pr-[20vw]   duration-1000 focus:bg-amber-950 focus:text-white  hover:bg-yellow-950 hover:text-white focus:py-2  hover:pl-3 hover:pr-[20vw] hover:py-2  hover:animate-none' to='/skills'>Skills</NavLink>
           {/* <NavLink className='   duration-1000 focus:animate-none focus:pl-3 focus:pr-[20vw]   focus:bg-amber-950 focus:text-white hover:bg-yellow-950 hover:text-white focus:py-2  hover:pl-3 hover:pr-[20vw] hover:py-2  hover:animate-none' to='/faq'>Faq</NavLink> */}
           <NavLink className=' spacing duration-1000 focus:animate-none focus:pl-3 focus:pr-[15vw] focus:bg-amber-950 focus:text-white  hover:bg-yellow-950 hover:text-white hover:pl-3 hover:pr-[15vw] hover:py-2  hover:animate-none focus:py-2  ' to='/contact'>Contact</NavLink>
           {/* <div className=" flex justify-between absolute gap-[90%] bottom-[5%]">
            <button className="px-3 py-2 border-black rounded-lg btn capitalize text-xl bg-transparent text-black">Previous</button>
            <button className="px-4 py-2 border-black font-normal rounded-lg btn capitalize text-xl bg-transparent text-black">Next</button>
         </div>
       */}
        </div>
         
         
        
         </div>
        
    );
};

export default Root;