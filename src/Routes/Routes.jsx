import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";

import InfoPage from "../Pages/InfoPage/InfoPage";
import Root from "../Components/Root/Root";
import ProjectPage from "../Pages/ProjectsPage/ProjectPage";
import SkillsPage from "../Pages/SkillsPage/SkillsPage";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([

    {
        path:'/',
        element:<Root></Root>,
        children : [
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
               path:'/info',
               element:<InfoPage></InfoPage>
            },
            {
                path:'/projects',
                element:<ProjectPage></ProjectPage>
            },
            {
                path:'/skills',
                element:<SkillsPage></SkillsPage>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
       
    }

])
 export default router