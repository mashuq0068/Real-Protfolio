import { useEffect, useRef, useState } from "react";
// import {LuSend} from 'react-icons/lu';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";



const Contact = () => {
    
    // const[openEmail , setOpenEmail] = useState(false)
    const[loading , setLoading] = useState(false)
    const form = useRef();
    console.log(form.current)
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
    // const handleWriteEmail = () => {
    //     setOpenEmail(true)

    // }
    const [isPageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
     
      setTimeout(() => {
        setPageLoaded(true);
      }, 500);
    }, []);
   
    
    const handleSendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        
        
        emailjs.sendForm('service_4aoih6o', 'template_bx56zv7', form.current,'_6wh8e0iIf8TYxkHD')
        .then((result) => {
           console.log(result)
        //    setOpenEmail(false)
           setLoading(false)
            Swal.fire({
                icon: 'success',
                title: 'Great',
                text: 'Your mail successfully sent via gmail',
                confirmButtonColor:'#451A03',

            
                customClass: {
                    confirmButtonColor: '#451A03',
                    
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
        <>
        <div className={`custom-cursor  duration-1000 ${cursorWidth} ${isPageLoaded ? 'loaded' : ''}`} style={{ left: customCursorPosition.x, top: customCursorPosition.y }}></div>
          <div className={`page-transition ${isPageLoaded ? 'loaded new-page-ani' : ''} `}>
        </div>
       

<div className="flex  myAni 2xl:text-lg min-h-screen items-center justify-start bg-yellow-50">
  <div className="mx-auto w-full max-w-lg">
    <h1 className="text-4xl font-medium text-center mb-[10vh]">Contact me</h1>
    {/* <p className="mt-3 text-base w-max mx-auto 2xl:text-xl xl:text-lg mb-[10vh]">Email me at mashuq0068@gmail.com from  here:</p> */}

    <form ref={form} onSubmit={handleSendEmail} className="mt-10 ">
    
  

      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input type="text" name="name" className="peer text-base 2xl:text-xl xl:text-lg 2 block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0  text-gray-900 focus:border-amber-950 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base 2xl:text-xl xl:text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-amber-950 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="email" className="peer text-base 2xl:text-xl xl:text-lg block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-gray-900 focus:border-amber-950 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base 2xl:text-xl xl:text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-amber-950 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b text-base 2xl:text-xl xl:text-lg  border-gray-500 bg-transparent py-2.5 px-0  text-gray-900 focus:border-amber-950 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label className="absolute top-3 -z-10 origin-[0] text-base 2xl:text-xl xl:text-lg -translate-y-6 scale-75 transform  text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-amber-950 peer-focus:dark:text-amber-950">Your message</label>
        </div>
      </div>
      <button type="submit" className="mt-5 rounded-md bg-amber-950 px-10 py-2 text-white">Send Message</button>
    </form>
  </div>
</div>
        </>
    );
};

export default Contact;
// service_4aoih6o
// service_15dlybm