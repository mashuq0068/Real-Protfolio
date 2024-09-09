
import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Baneer";
import Info from "../../Components/Info/Info";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import Banner1 from "../../Components/Banner1/Banner1";



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

      <div className="lg:h-[101vh] lg:mb-0 mb-[10vh] bg-yellow-50">
        <div className={`page-transition justify-center items-center text-white 2xl:text-5xl text-3xl font-bold  ${isPageLoaded ? 'loaded new-page-ani' : ''}`}>

        </div>

        <div className=" bg-yellow-50">
       <Banner></Banner>
       </div>
        {/* <Banner1 /> */}
        <div className=" lg:hidden  space-y-28 bg-yellow-50  block">
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