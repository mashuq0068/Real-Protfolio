import { useState } from "react";
import {LuSend} from 'react-icons/lu';


const Contact = () => {
    const[openEmail , setOpenEmail] = useState(false)
    const handelWriteEmail = () => {
        setOpenEmail(true)

    }
    return (
        <div className="flex flex-col h-screen justify-center items-center ani-new-page">
            <div className="relative ">
            <img className="h-[70vh]" src="https://i.postimg.cc/j23XG4Cf/removal-ai-0a082ce1-bb71-4053-b762-5e48749558f9-screenshot-2023-10-30-155830.png" alt="" />
            <div className={`${openEmail ? "lg:h-[20vh] h-[30vh] w-[50vw] p-[5%] lg:w-[20vw]":"h-[0%] "}  absolute   duration-1000  ease-in-out top-[13%] rounded-lg glass  left-[19%]  overflow-hidden drop-shadow-xl shadow-xl  `}>
                <form className="space-y-7">
                    
                <div className="flex gap-3">
                        <p className=" 2xl:text-2xl">From</p>
                    <input type="email" className="w-full text-xl  bg-transparent border-b border-b-gray-400  focus:outline-none " name="" id="" required/>
                    </div>
                    <div className="flex gap-2 ">
                        <p className=" 2xl:text-2xl"> Mail:</p>
                    <input type="text" className="w-full bg-transparent border-b border-b-gray-400  focus:outline-none " name="" id="" required/>
                    </div>
                </form>
             

            </div>
            </div>
            <div>
           { !openEmail ?  <button onClick={handelWriteEmail} className="btn   text-white bg-red-500 hover:bg-teal-500 border-none drop-shadow-xl shadow-xl capitalize 2xl:text-2xl">Write Email</button> :
               <button type="submit" onClick={handelWriteEmail} className="btn bg-red-500 hover:bg-red-700 text-white  border-none drop-shadow-xl shadow-xl  capitalize 2xl:text-2xl">Send Email <span><LuSend></LuSend></span></button>}
            </div>
        </div>
    );
};

export default Contact;