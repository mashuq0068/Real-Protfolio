import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import resumePdf from "../../../src/Md. Mashuqur rahman(Full Stack Developer) (1).pdf";
import portfolioPicture from "../../../public/images/picture.png";

const Banner1 = () => {
    const [customCursorPosition, setCustomCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorWidth, setCursorWidth] = useState("w-[40px] h-[40px] border border-black bg-transparent");

    useEffect(() => {
        const changedCursorPosition = (e) => {
            setCustomCursorPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", changedCursorPosition);

        return () => {
            document.removeEventListener("mousemove", changedCursorPosition);
        };
    }, []);

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <div className={`custom-cursor lg:block hidden duration-1000 ${cursorWidth}`} style={{ left: customCursorPosition.x, top: customCursorPosition.y }}>
            </div>
            <div className="bg-yellow-50 flex md:flex-row flex-col lg:w-[75vw] z-10 lg:h-screen items-center justify-between px-[10%] md:px-[8%] lg:pt-0 pt-0 md:pt-[10vh] lg:gap-0 gap-0 md:gap-[10%] lg:px-[15%]">
                <div className="z-10">
                    <p
                        data-aos="fade-right"
                        data-aos-duration="2500"
                        onMouseLeave={() => {
                            setCursorWidth("w-[40px] h-[40px]  border border-black  bg-transparent");
                        }}
                        onMouseEnter={() => {
                            setCursorWidth("w-[150px] duration-1000 border-none bg-red-500  h-[150px] ");
                        }}
                        className="2xl:text-4xl md:text-3xl md:text-left text-center lg:mt-0 mt-[5vh] text-2xl lg:w-[25vw]"
                    >
                        Hi! I am Mashuq. A professional Full Stack Developer
                    </p>
                    <a href={resumePdf} download>
                        <button data-aos="fade-right" data-aos-duration="2500" className="md:w-auto w-max md:mx-0 mx-auto 2xl:text-xl flex items-center btn bg-amber-950 text-white capitalize border-none hover:bg-amber-950 overflow-hidden md:mb-0 mb-[5vh] lg:pr-3 md:px-4 lg:py-2 py-3 lg:pl-6 h-[5vh] md:rounded-lg lg:rounded-xl border border-gray-500 mt-[10%]">Resume <FaRegEdit /></button>
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden rounded-full border-4 border-amber-950 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] shadow-xl">
                        <img
                            id="picture-ani"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            src={portfolioPicture}
                            alt="Portfolio"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-amber-700 opacity-0 hover:opacity-70 transition-opacity"></div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Banner1;
