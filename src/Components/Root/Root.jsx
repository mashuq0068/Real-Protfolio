import { NavLink, Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="flex relative">
           <div className="flex-1">
           <Outlet className="flex-1"></Outlet>
           </div>
        <div className="ani-root h-[100vh] lg:flex hidden flex-col xl:text-xl gap-5 2xl:text-2xl   w-[30vw] items-start pl-[3vw] relative font-notify  bg-slate-200 drop-shadow-xl shadow-xl shadow-black   ">
           <NavLink to='/' className={`mt-[18vh] focus:pl-3 focus:animate-none focus:pr-[80%]  focus:bg-amber-400  animate-bounce focus:py-2 focus:rounded-2xl hover:bg-amber-400 hover:pl-3 hover:pr-[80%] hover:py-2 hover:rounded-2xl hover:animate-none duration-1000`} >Home</NavLink>
           <NavLink className='  animate-bounce focus:pl-3 focus:animate-none focus:pr-[80%]  focus:bg-pink-500 hover:bg-pink-500 hover:pl-3 hover:pr-[80%] focus:py-2 focus:rounded-2xl hover:py-2 hover:rounded-2xl hover:animate-none duration-1000' to='/info'>Info</NavLink>
           <NavLink className=' animate-bounce focus:pl-3 focus:animate-none focus:pr-[70%]  duration-1000 focus:bg-cyan-400  hover:bg-cyan-400 focus:py-2 focus:rounded-2xl hover:pl-3 hover:pr-[70%] hover:py-2 hover:rounded-2xl hover:animate-none' to='/projects'>Projects</NavLink>
           <NavLink className=' animate-bounce focus:pl-3 focus:animate-none focus:pr-[20vw]   duration-1000 focus:bg-amber-400  hover:bg-amber-400 focus:py-2 focus:rounded-2xl hover:pl-3 hover:pr-[20vw] hover:py-2 hover:rounded-2xl hover:animate-none' to='/skills'>Skills</NavLink>
           <NavLink className='  animate-bounce duration-1000 focus:animate-none focus:pl-3 focus:pr-[20vw]   focus:bg-sky-400 hover:bg-sky-400 focus:py-2 focus:rounded-2xl hover:pl-3 hover:pr-[20vw] hover:py-2 hover:rounded-2xl hover:animate-none' to='/faq'>Faq</NavLink>
           <NavLink className=' animate-bounce duration-1000 focus:animate-none focus:pl-3 focus:pr-[15vw] focus:bg-teal-400  hover:bg-teal-400 hover:pl-3 hover:pr-[15vw] hover:py-2 hover:rounded-2xl hover:animate-none focus:py-2 focus:rounded-2xl ' to='/contact'>Contact</NavLink>
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