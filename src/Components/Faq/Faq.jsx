import { useState } from "react";


const Faq = () => {
    const[firstFaq , setFirstFaq] = useState(false)
    const[secondFaq , setSecondFaq] = useState(false)
    const[thirdFaq , setThirdFaq] = useState(false)
    const[fourthFaq , setFourthFaq] = useState(false)
    const[fifthFaq , setFifthFaq] = useState(false)
    return (
        <div className=" justify-center flex flex-col  items-center lg:h-screen">
            {/* start */}
            <div className="grid lg:grid-cols-3   grid-cols-1 gap-8 px-[5%]">
            <div>
                <button onClick={()=>{setFirstFaq(true)}} className={`${firstFaq && "hidden"} px-8 py-2 font-bold 2xl:text-xl rounded-2xl text-pink-400 border border-pink-400`}>About me</button>
                <div className={`${firstFaq ? "lg:h-[46vh] md:h-[55vh]  p-[4%]   " : "h-[0vh] absolute  w-[30%]"} rounded-lg hover:shadow-xl  overflow-hidden  text-center  duration-1000  drop-shadow-xl hover:shadow-gray-500  shadow-lg shadow-pink-300  2xl:text-xl flex gap-2 2xl:gap-5 flex-col justify-center items-center `}>
                    <h3 className="font-bold text-pink-500">About me</h3>
               <p> I am an accomplished front-end developer with a deep proficiency in HTML, CSS, and JavaScript, along with a specialization in React. To know about it more please go to the info page. </p> 
                </div>
            </div>
            {/* start */}
            <div>
                <button onClick={()=>{setSecondFaq(true)}} className={`${secondFaq && "hidden"} px-8 py-2 font-bold 2xl:text-xl  rounded-2xl text-teal-500 border border-teal-500`}>Contact</button>
                <div className={`${secondFaq ? "lg:h-[46vh] md:h-[55vh]  p-[4%] " : "h-[0vh] w-[30%] absolute "} rounded-lg hover:shadow-xl overflow-hidden duration-1000   drop-shadow-xl hover:shadow-gray-500 text-center  shadow-lg shadow-teal-200 2xl:text-xl flex flex-col justify-center gap-2 2xl:gap-5 items-center`}>
                    <h3 className="font-bold text-teal-500">Contact</h3>
                  <p>
                  You can Email me to contact with me. I will try to reply soon as much as I can do. Please go to contact page. in there , you can email me directly via gmail.
                  </p>
                </div>
            </div>
            {/* start */}
            <div>
                <button onClick={()=>{setThirdFaq(true)}} className={`${thirdFaq && "hidden"} px-8 py-2 font-bold  2xl:text-xl rounded-2xl text-sky-500 border border-sky-500`}>Skills</button>
                <div className={`${thirdFaq ? "lg:h-[46vh] md:h-[55vh]  p-[4%]  " : "h-[0vh] absolute w-[30%]"} rounded-lg hover:shadow-xl overflow-hidden text-center duration-1000  drop-shadow-xl hover:shadow-gray-500 shadow-lg shadow-sky-300  2xl:text-xl flex flex-col justify-center items-center gap-5 `}>
                    <h3 className="font-bold text-sky-400 ">Skills</h3>
                   <p>
                        I have a good idea about html, css, js, tailwind and react. Also used github and other technologies like firebase also have a idea  about  technologies that is involved in front-end.
                   </p> 
                </div>
            </div>
            </div>
            {/* start */}
            <div className=" grid lg:grid-cols-2 mt-8 grid-cols-1 gap-8 px-[10%]">
            <div>
                <button onClick={()=>{setFourthFaq(true)}} className={`${fourthFaq && "hidden"} px-8 py-2 font-semibold 2xl:text-xl  rounded-2xl text-orange-400 border border-orange-400`}>Experience && expertise</button>
                <div className={`${fourthFaq ? "lg:h-[44vh] md:h-[55vh]    p-[4%] " : "h-[0vh] absolute w-[30%]"} rounded-lg hover:shadow-xl overflow-hidden  duration-1000  drop-shadow-xl shadow-orange-400 hover:shadow-gray-400 text-center shadow-lg   2xl:text-xl flex flex-col 2xl:gap-5 gap-2 justify-center items-center`}>
                <h3 className="font-bold text-orange-400 ">Experience && expertise</h3>
                  <p>
                  I do not have a lot of years experience but I have enough experience about react and front-end to make and develope professional websites. I learned react for a long time and my expertise about front end is good for any company <span className="hidden 2xl:block">who are a need of a junior front-end-developer.</span>.
                  </p>
                </div>
            </div>
            {/* start */}
             <div>
                <button onClick={()=>{setFifthFaq(true)}} className={`${fifthFaq && "hidden"} px-8 py-2 2xl:text-xl font-semibold  rounded-2xl text-gray-500 border border-gray-500`}>Development Ability</button>
                <div className={`${fifthFaq ? "lg:h-[44vh] md:h-[55vh]  p-[4%]  " : "h-[0vh] absolute w-[30%]"} rounded-lg hover:shadow-xl  overflow-hidden  duration-1000  drop-shadow-xl hover:shadow-gray-500 shadow-lg text-center shadow-gray-500 flex flex-col justify-center items-center gap-2 2xl:gap-5 2xl:text-xl`}>
                    <h3 className="font-bold text-gray-800">Development Ability</h3>
                   <p>
                   I have a good experience to develope a project according to the clients need. Also I try to make the website first and make the user interface better. My development ability is help full and I can solve  problems in a short time and worked in many small and heavy websites
                    </p>  
                </div>
            </div> 
             {/* start */}
            </div>
            
        </div>
    );
};

export default Faq;