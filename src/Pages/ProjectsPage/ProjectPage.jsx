import { useNavigate } from "react-router-dom";
import Projects from "../../Components/Projects/Projects";
import { useEffect } from "react";


const ProjectPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
        
            
           
          
              
            
           
        };

      
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navigate]);
    return (
        <div className="h-[101vh] bg-slate-200">
            <Projects></Projects>
        </div>
    );
};

export default ProjectPage;