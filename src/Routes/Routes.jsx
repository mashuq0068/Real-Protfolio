import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";

import InfoPage from "../Pages/InfoPage/InfoPage";
import Root from "../Components/Root/Root";
import ProjectPage from "../Pages/ProjectsPage/ProjectPage";
import SkillsPage from "../Pages/SkillsPage/SkillsPage";

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
            }
        ]
       
    }

])
 export default router