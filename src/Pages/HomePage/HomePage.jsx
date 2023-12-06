
import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Baneer";



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
      </div>
      </>
       
    );
};

export default HomePage;