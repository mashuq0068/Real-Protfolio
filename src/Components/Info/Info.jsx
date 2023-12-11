import { useEffect, useState } from "react";


const Info = () => {
    const [isPageLoaded, setPageLoaded] = useState(false);
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

    useEffect(() => {
     
      setTimeout(() => {
        setPageLoaded(true);
      }, 500);
    }, []);
  console.log(customCursorPosition)
    return (
        <>
         <div className={`custom-cursor  duration-1000 ${cursorWidth} ${isPageLoaded ? 'loaded' : ''}`} style={{ left: customCursorPosition.x, top: customCursorPosition.y }}></div>
         <div className={`page-transition ${isPageLoaded ? 'loaded new-page-ani' : ''} `}>
        
        </div>
        <div className="lg:h-screen bg-yellow-50">
        
         {/* <div className="flex gap-[2%] justify-center pt-[5%] bg-slate-200 ">
         <p className="2xl:w-[40px] w-[20px] h-[20px] lg:w-[30px] ani-bounce bg-rose-500 lg:h-[30px] 2xl:h-[40px] rounded-[50%]"></p>
         <p className="2xl:w-[40px] w-[20px] h-[20px] lg:w-[30px] ani-bounce2 bg-amber-500 lg:h-[30px] 2xl:h-[40px] rounded-[50%]"></p>
         <p className="2xl:w-[40px] w-[20px] h-[20px] lg:w-[30px] ani-bounce3 bg-teal-500 lg:h-[30px] 2xl:h-[40px] rounded-[50%]"></p>
         <p className="2xl:w-[40px] w-[20px] h-[20px] lg:w-[30px] ani-bounce4  bg-purple-500 lg:h-[30px] 2xl:h-[40px] rounded-[50%]"></p>
        
     </div> */}
    
    <div className="flex-col flex items-center   lg:h-screen justify-center  ">
        <div className="relative ani-left  text-2xl lg:pt-[0]  z-20 xl:text-2xl   2xl:text-3xl p-[2%] pt-0  top-5 " >
           <h2 className="lg:pb-0 pb-6 ">About me</h2>
        </div>
        <div  className="ani-right   2xl:w-[40vw] z-10 xl:w-[55vw] px-[3%] lg:py-[3%] lg:pl-[3%] xl:text-lg  lg:h-[70vh] 2xl:text-2xl ">
            <p onMouseLeave={()=>{setCursorWidth("w-[40px] h-[40px]  border border-black  bg-transparent")}}    onMouseEnter={()=>{{setCursorWidth("w-[150px] duration-1000 border-none bg-red-500  h-[150px] ")}}} className=" text-center  ani-letter     font-medium
              ">
            I am an accomplished front-end developer with a deep proficiency in HTML, CSS, and JavaScript, along with a specialization in React. I am passionate about crafting engaging and user-friendly web interfaces. My dedication to elegant design, combined with my mastery of these technologies, enables me to transform creative concepts into responsive and visually stunning websites. My work marries creative aesthetics with smooth functionality, ensuring that every project I undertake achieves excellence in code and user experience. Explore my portfolio to witness the seamless fusion of creativity and code, with React as my forte.
            </p>
        </div>
        </div>
       
        
       
    </div>
    </>
    );
};

export default Info;