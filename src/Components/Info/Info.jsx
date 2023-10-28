

const Info = () => {
    return (
        <div className="h-screen bg-white">
        
         <div className="flex gap-[2%] justify-center pt-[5%] bg-slate-200 ">
         <p className="2xl:w-[40px] w-[20px] h-[20px] lg:w-[30px] ani-bounce bg-rose-500 lg:h-[30px] 2xl:h-[40px] rounded-[50%]"></p>
         <p className="2xl:w-[40px] w-[20px] h-[20px] lg:w-[30px] ani-bounce2 bg-amber-500 lg:h-[30px] 2xl:h-[40px] rounded-[50%]"></p>
         <p className="2xl:w-[40px] w-[20px] h-[20px] lg:w-[30px] ani-bounce3 bg-teal-500 lg:h-[30px] 2xl:h-[40px] rounded-[50%]"></p>
         <p className="2xl:w-[40px] w-[20px] h-[20px] lg:w-[30px] ani-bounce4  bg-purple-500 lg:h-[30px] 2xl:h-[40px] rounded-[50%]"></p>
        
     </div>
    
    <div className="flex-col flex items-center justify-center pb-[5%] bg-slate-200 ">
        <div className="relative ani-left z-20 xl:text-2xl   2xl:text-3xl p-[2%] bg-glass top-5 drop-shadow-xl " >
           <h2>About my Info</h2>
        </div>
        <div  className="ani-right p-[3%] lg:pl-[3%] xl:text-xl overflow-y-scroll lg:h-[70vh] 2xl:text-2xl ">
            <p className=" lg:w-[35vw] text-center
              p-[5%] bg-glass ani-letter  drop-shadow-xl  font-medium
              ">
            I am an accomplished front-end developer with a deep proficiency in HTML, CSS, and JavaScript, along with a specialization in React. I am passionate about crafting engaging and user-friendly web interfaces. My dedication to elegant design, combined with my mastery of these technologies, enables me to transform creative concepts into responsive and visually stunning websites. My work marries creative aesthetics with smooth functionality, ensuring that every project I undertake achieves excellence in code and user experience. Explore my portfolio to witness the seamless fusion of creativity and code, with React as my forte.
            </p>
        </div>
        </div>
       
        
       
    </div>
    );
};

export default Info;