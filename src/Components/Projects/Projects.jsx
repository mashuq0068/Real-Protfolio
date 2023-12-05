import { useEffect, useState } from "react";


const Projects = () => {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Simulate page loading
    setTimeout(() => {
      setPageLoaded(true);
    }, 500);
  }, []);

    return (
      <>
      <div className={`page-transition ${isPageLoaded ? 'loaded new-page-ani' : ''} `}>
        
        </div>
        <div className={`myAni flex justify-center items-center h-screen bg-slate-200`}>
          <div className="h-[60vh]  w-[40vw] overflow-hidden">
          <div className="h-full  box-content w-full pr-[27px] overflow-y-scroll    overflow-x-hidden">
            <div className="h-[600vh]   bg-red-300 w-[40vw]">

            </div>

           </div>
          </div>
        </div>
        </>
    );
};

export default Projects;