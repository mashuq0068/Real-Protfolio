import { useNavigate } from "react-router-dom";
import Info from "../../Components/Info/Info";
import { useEffect } from "react";


const InfoPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY  < 1) {
              navigate('/');
            }
            else if (window.screenY > 1){
                navigate('/projects')
            }
           
          
              
            
           
        };

      
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navigate]);
    return (
        <div className="h-[105vh]">
            <Info></Info>
        </div>
    );
};
export default InfoPage