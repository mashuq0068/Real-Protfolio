import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="flex">
            <Outlet className="flex-1"></Outlet>
           <div className="myAni2 w-[30vw] relative bg-slate-200 drop-shadow-xl shadow-xl shadow-black  h-[100vh] ">
           </div>
        </div>
    );
};

export default Root;