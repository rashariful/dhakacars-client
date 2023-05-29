import React, { useContext } from "react";
import {
  FaBox,
  FaBoxOpen,
  FaCalendarAlt,
  FaCartPlus,
  FaHome,
  FaShoppingCart,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Components/Pages/Header/Header";
import { AuthContext } from "../../Context/UserContext";
import useAdmin from "../../hook/useAdmin";
import useBuyer from "../../hook/useBuyer";
import useMerchant from "../../hook/useMerchant";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [admin] = useAdmin(user);
  const [merchant] = useMerchant(user);
  const [buyer] = useBuyer(user);
  console.log(buyer,merchant,admin, "dashboar layout info")

  return (
    <div>
      {/* <Header></Header> */}
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-[#F1F5F9]">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-xl bg-slate-800">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 bg-slate-800  shadow-2xl rounded-t-md text-base text-slate-300 capitalize font-semibold">
            {user.photoURL ?
            <img
            src={user?.photoURL}
            className="w-20 h-20 rounded-full mx-auto border-2 border-slate-300 shadow-lg"
            alt=""
          /> :
          <img src="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg" className="w-20 h-20 rounded-full mx-auto border-2 border-slate-300 shadow-lg" alt="" /> 
           }
            <h3 className="text-center text-lg font-bold my-3">
              {user?.displayName ? user?.displayName : "User Name here"} 
            </h3>
            <li className="hover:bg-slate-700 rounded-md">
              <Link to="/dashboard">
                <FaHome className="w-6 h-6 text-gray-400"></FaHome>
                <span className="ml-3">My Dashboard</span>
              </Link>
            </li>
            {buyer &&(
              <>
              <li className="hover:bg-slate-700 rounded-md">
                <Link to="/dashboard/my-bookings">
                  <FaCalendarAlt className="w-6 h-6 text-slate-500"></FaCalendarAlt>
                  <span className="ml-3">My Bookings</span>
                </Link>
              </li>
              <li className="hover:bg-slate-700 rounded-md">
                <Link to="/dashboard/my-bookings">
                  <FaCalendarAlt className="w-6 h-6 text-slate-500"></FaCalendarAlt>
                  <span className="ml-3">coming soon</span>
                </Link>
              </li>
              </>
            )}

            {admin && (
              <>
                <li className="hover:bg-slate-700 rounded-md">
                  <Link to="/dashboard/my-bookings">
                    <FaUserAlt className="w-6 h-6 text-slate-400"></FaUserAlt>
                    <span className="ml-3">Booking</span>
                  </Link>
                </li>
                <li className="hover:bg-slate-700 rounded-md">
                  <Link to="/dashboard/show-details">
                    <FaUserCircle className="w-6 h-6 text-slate-400"></FaUserCircle>
                    <span className="ml-3">Duty Details</span>
                  </Link>
                </li>
              </>
            )}

            {merchant && (
              <div>
                <li className="hover:bg-slate-700 rounded-md">
                  <Link to="/dashboard/add-details">
                    <FaCartPlus className="w-6 h-6 text-gray-500"></FaCartPlus>
                    <span className="ml-3">Add Duty</span>
                  </Link>
                </li>

                <li className="hover:bg-slate-700 rounded-md">
                  <Link to="/dashboard/show-details">
                    <FaUserCircle className="w-6 h-6 text-slate-400"></FaUserCircle>
                    <span className="ml-3">Duty Details</span>
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
