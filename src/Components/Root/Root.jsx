import { NavLink, Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="flex">
           <div className="flex-1">
           <Outlet className="flex-1"></Outlet>
           </div>
        <div className="myAni2 lg:flex hidden flex-col xl:text-xl gap-5 2xl:text-2xl   w-[30vw] items-start pl-[3vw] relative font-notify  bg-slate-200 drop-shadow-xl shadow-xl shadow-black  h-[100vh] ">
           <NavLink className='mt-[18vh]  animate-bounce hover:bg-pink-500 hover:pl-3 hover:pr-[80%] hover:py-2 hover:rounded-2xl hover:animate-none duration-1000' to='/info'>Info</NavLink>
           <NavLink className=' animate-bounce duration-1000  hover:bg-cyan-400 hover:pl-3 hover:pr-[70%] hover:py-2 hover:rounded-2xl hover:animate-none' to='/'>Projects</NavLink>
           <NavLink className=' animate-bounce  duration-1000  hover:bg-amber-400 hover:pl-3 hover:pr-[20vw] hover:py-2 hover:rounded-2xl hover:animate-none' to='/'>Skills</NavLink>
           <NavLink className='  animate-bounce duration-1000  hover:bg-sky-400 hover:pl-3 hover:pr-[20vw] hover:py-2 hover:rounded-2xl hover:animate-none' to='/'>Faq</NavLink>
           <NavLink className=' animate-bounce duration-1000  hover:bg-teal-400 hover:pl-3 hover:pr-[15vw] hover:py-2 hover:rounded-2xl hover:animate-none' to='/'>Contact</NavLink>
               
         </div>
        </div>
    );
};

export default Root;