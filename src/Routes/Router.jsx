import { createBrowserRouter } from "react-router-dom";
import DriverDetails from "../Components/Pages/DriverDetails/DriverDetails";
import Home from "../Components/Pages/Home/Home/Home";
import DutiDetail from "../Components/Pages/Merchant/DutiDetail";
import DutiDetails from "../Components/Pages/Merchant/DutiDetails";
import UserBooking from "../Components/Pages/UserBooking/UserBooking";
import Main from "../Layout/Main/Main";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/booking",
                element: <UserBooking/>
            },
            {
                path: "/merchant/duty-Detail",
                element: <DutiDetail/>
            },
            {
                path: "/merchant/all-duty-Details",
                element: <DutiDetails></DutiDetails>
            },
            {
                path: "/driver-details",
                element: <DriverDetails></DriverDetails>
            },
        ]
    }
])

export default router