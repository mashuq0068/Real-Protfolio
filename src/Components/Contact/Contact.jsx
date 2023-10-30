import { useRef, useState } from "react";
import {LuSend} from 'react-icons/lu';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";



const Contact = () => {
    
    const[openEmail , setOpenEmail] = useState(false)
    const[loading , setLoading] = useState(false)
    const form = useRef();
    console.log(form.current)
    const handleWriteEmail = () => {
        setOpenEmail(true)

    }
    
    const handleSendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        
        
        emailjs.sendForm('service_15dlybm', 'template_bx56zv7', form.current,'_6wh8e0iIf8TYxkHD')
        .then((result) => {
           console.log(result)
           setOpenEmail(false)
           setLoading(false)
            Swal.fire({
                icon: 'success',
                title: 'Great',
                text: 'Your mail successfully sent via gmail',
            
                customClass: {
                    confirmButtonColor: 'red',
                    
                  },
                 
              
              })
        }, (error) => {
            console.log(error.text);
            console.log("error sending message, try again!")
        });
        if(loading){
            return(
                <span className="loading loading-spinner text-red-600 absolute top-[50%] left-[50%]"></span>
            )
        }
       
       
    }
    return (
        <div className="flex flex-col  lg:h-screen justify-start lg:justify-center items-center ani-new-page">
            <div className="relative ">
            <img className="h-[70vh]" src="https://i.postimg.cc/j23XG4Cf/removal-ai-0a082ce1-bb71-4053-b762-5e48749558f9-screenshot-2023-10-30-155830.png" alt="" />
            <div className={`${openEmail ? "lg:h-[30vh] h-[40vh] md:w-[30vw] w-[50vw] p-[5%] lg:w-[20vw]":"h-[0%] "}  absolute   duration-1000   ease-in-out lg:top-[0%] rounded-lg glass  left-[19%]  overflow-hidden drop-shadow-xl shadow-xl  `}>
                <form ref={form} onSubmit={handleSendEmail} className="space-y-7">
                    
                <div className="flex gap-3">
                        <p className=" 2xl:text-2xl text-base">From:</p>
                    <input name="email"  type="email" className="w-full 2xl:text-2xl  bg-transparent border-b border-b-gray-400  focus:outline-none "  id="" required/>
                    </div>
                    <div className="flex gap-2 ">
                        <p className=" 2xl:text-2xl text-base"> Mail:</p>
                    <input name="message" type="text" className="w-full bg-transparent border-b border-b-gray-400 2xl:text-2xl  focus:outline-none "  id="" required/>
                    </div>
                    <button  type="submit"  className="2xl:btn text-white flex xl:px-3 xl:rounded-lg xl:py-2 md:py-1 w-full gap-2 lg:w-auto md:w-full justify-center items-center md:px-2 md:rounded-lg py-1 px-2 2xl:bg-red-500 bg-red-500 hover:bg-red-700 2xl:text-white relative font-normal  border-none drop-shadow-xl shadow-xl  2xl:capitalize 2xl:text-xl">Send Email <span><LuSend></LuSend></span></button>
                   
                </form>
             

            </div>
            </div>
            <div>
       {    !openEmail && <button onClick={handleWriteEmail} className="btn text-base   text-white bg-red-500 hover:bg-teal-500 border-none drop-shadow-xl shadow-xl capitalize 2xl:text-2xl">Write Email</button>} 
              
             
            </div>
        </div>
    );
};

export default Contact;
// service_rknc5no
// service_15dlybm