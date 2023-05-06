import { createBrowserRouter } from "react-router-dom";
import DashboardHome from "../Components/Dashboard/DashboardHome/DashboardHome";
import AddDutyDetails from "../Components/Dashboard/Merchant/AddDutyDetails/AddDutyDetails";
import DutyDetailsShow from "../Components/Dashboard/Merchant/DutyDetailsShow/DutyDetailsShow";
import DriverDetails from "../Components/Pages/DriverDetails/DriverDetails";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import NotFound from "../Components/Pages/NotFound/NotFound";
import Register from "../Components/Pages/Register/Register";
import UserBooking from "../Components/Pages/UserBooking/UserBooking";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main/Main";
import MyBookings from "../Components/Dashboard/MyBookings/MyBookings";
import BookingDetails from "../Components/Dashboard/BookingDetails/BookingDetails";
import About from "../Components/Pages/Home/About/About";
import Blog from "../Components/Pages/Home/Blog/Blog";
import PrivacyPolicy from "../Components/Pages/Home/LegalInfo/PrivacyPolicy";
import TermsOfService from "../Components/Pages/Home/LegalInfo/TermsOfService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/booking",
        element: <UserBooking />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/driver-details",
        element: <DriverDetails></DriverDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
        <DashboardLayout></DashboardLayout>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/add-details",
        element: <AddDutyDetails></AddDutyDetails>,
      },
      {
        path: "/dashboard/show-details",
        element: <DutyDetailsShow></DutyDetailsShow>,
      },
      {
        path: "/dashboard/my-bookings",
        element:<MyBookings/>,
      },
      {
        path: "/dashboard/booking-details/:id",
        element: <BookingDetails/>,
        loader: ({ params }) => fetch(`${process.env.REACT_APP_ROOT}/booking/${params.id}`)
      },
    ],
  },
]);

export default router