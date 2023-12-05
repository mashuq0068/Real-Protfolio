import { useEffect, useState } from "react";
import Skills from "../../Components/Skills/Skills";

const SkillsPage = () => {
    const [isPageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setPageLoaded(true);
      }, 500);
    }, []);
    return (
        <>
         <div className={`page-transition ${isPageLoaded ? 'loaded new-page-ani' : ''} `}>
        
        </div>
        <div className="ani-new-page">
            <Skills></Skills>
        </div>
        </>
    );
};

export default SkillsPage;