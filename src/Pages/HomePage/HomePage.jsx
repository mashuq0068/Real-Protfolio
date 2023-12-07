
import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Baneer";
import Info from "../../Components/Info/Info";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";



const HomePage = () => {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Simulate page loading
    setTimeout(() => {
      setPageLoaded(true);
    }, 500);
  }, []);
    
    return (
      <>
        
      <div className="h-[101vh] bg-yellow-50">
      <div className={`page-transition ${isPageLoaded ? 'loaded new-page-ani' : ''}`}>
        
        </div>
        
        <Banner></Banner>
        <div className=" lg:hidden  block">
          <Info></Info>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>

        </div>

      </div>
      </>
       
    );
};

export default HomePage;