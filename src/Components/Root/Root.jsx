import { NavLink, Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="flex">
           <div className="flex-1">
           <Outlet className="flex-1"></Outlet>
           </div>
        <div className="myAni2 lg:flex hidden flex-col xl:text-xl gap-5 2xl:text-2xl   w-[30vw] items-start pl-[3vw] relative font-notify  bg-slate-200 drop-shadow-xl shadow-xl shadow-black  h-[100vh] ">
           <NavLink to='/' className='mt-[18vh]  animate-bounce hover:bg-amber-400 hover:pl-3 hover:pr-[80%] hover:py-2 hover:rounded-2xl hover:animate-none duration-1000' >Home</NavLink>
           <NavLink className='  animate-bounce hover:bg-pink-500 hover:pl-3 hover:pr-[80%] hover:py-2 hover:rounded-2xl hover:animate-none duration-1000' to='/info'>Info</NavLink>
           <NavLink className=' animate-bounce duration-1000  hover:bg-cyan-400 hover:pl-3 hover:pr-[70%] hover:py-2 hover:rounded-2xl hover:animate-none' to='/'>Projects</NavLink>
           <NavLink className=' animate-bounce  duration-1000  hover:bg-amber-400 hover:pl-3 hover:pr-[20vw] hover:py-2 hover:rounded-2xl hover:animate-none' to='/'>Skills</NavLink>
           <NavLink className='  animate-bounce duration-1000  hover:bg-sky-400 hover:pl-3 hover:pr-[20vw] hover:py-2 hover:rounded-2xl hover:animate-none' to='/'>Faq</NavLink>
           <NavLink className=' animate-bounce duration-1000  hover:bg-teal-400 hover:pl-3 hover:pr-[15vw] hover:py-2 hover:rounded-2xl hover:animate-none' to='/'>Contact</NavLink>
       
        {/* <div className="badge font-mono text-xs  ">
            <span className=" char1  ">F</span>
            <span className=" char2 ">r</span>
            <span className=" char3 "> o</span>
            <span className=" char4  ">n</span>
            <span className=" char5  ">t</span>
            <span className=" char6  "></span>
            <span className=" char7 ">E</span>
            <span className=" char8  ">n</span>
            <span className=" char9 ">d</span>
            <span className=" char10 "></span>
            <span className=" char11 ">D</span>
            <span className=" char12 ">e</span>
            <span className=" char13 ">v</span>
            <span className=" char14 ">e</span>
            <span className=" char15 ">l</span>
            <span className=" char16 ">p</span>
            <span className=" char17 ">e</span>
            <span className=" char18">r</span>
            
         </div> */}
        
         {/* <img  className="w-[120px] ani xl:mt-[5%]  2xl:mt-[20%]  " src="https://i.postimg.cc/L65y3kpk/download-removebg-preview.png" alt="" /> */}
        </div>
         
         
        
         </div>
        
    );
};

export default Root;