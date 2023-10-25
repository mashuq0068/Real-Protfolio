import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";

import InfoPage from "../Pages/InfoPage/InfoPage";
import Root from "../Components/Root/Root";

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
            }
        ]
       
    }

])
 export default router