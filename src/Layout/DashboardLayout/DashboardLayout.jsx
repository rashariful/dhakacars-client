import React, { useContext } from "react";
import {
  FaBox,
  FaBoxOpen,
  FaCartPlus,
  FaHome,
  FaShoppingCart,
  FaUserAlt,
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

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 bg-white rounded-t-md text-base-content">
            <img
              src={user?.photoURL}
              className="w-20 h-20 rounded-full mx-auto border border-primary drop-shadow-md shadow-md"
              alt=""
            />
            <h3 className="text-center text-lg font-bold my-3">
              {user?.displayName}
            </h3>
            <li className="hover:bg-primary rounded-md hover:text-gray-200">
              <Link to="/dashboard">
                <FaHome className="w-6 h-6 text-gray-500"></FaHome>
                <span className="ml-3">My Dashboard</span>
              </Link>
            </li>
              <>
                <li className="hover:bg-primary rounded-md hover:text-gray-200">
                  <Link to="/dashboard/my-bookings">
                    <FaShoppingCart className="w-6 h-6 text-gray-500"></FaShoppingCart>
                    <span className="ml-3">My Bookings</span>
                  </Link>
                </li>
                <li className="hover:bg-primary rounded-md hover:text-gray-200">
                  <Link to="/dashboard/add-details">
                    <FaCartPlus className="w-6 h-6 text-gray-500"></FaCartPlus>
                    <span className="ml-3">Add Details</span>
                  </Link>
                </li>
                <li className="hover:bg-primary rounded-md hover:text-gray-200">
                  <Link to="/dashboard/show-details">
                    <FaBox className="w-6 h-6 text-gray-500"></FaBox>
                    <span className="ml-3">Show Duty Details</span>
                  </Link>
                </li>
              </>

            {admin && (
              <>
                <li className="hover:bg-primary rounded-md hover:text-gray-200">
                  <Link to="/dashboard/users/seller">
                    <FaUserAlt className="w-6 h-6 text-gray-500"></FaUserAlt>
                    <span className="ml-3">seller</span>
                  </Link>
                </li>
                <li className="hover:bg-primary rounded-md hover:text-gray-200">
                  <Link to="/dashboard/users/buyer">
                    <FaUserAlt className="w-6 h-6 text-gray-500"></FaUserAlt>
                    <span className="ml-3">buyer</span>
                  </Link>
                </li>
              </>
            )}

            {merchant && (
              <div>
                <li className="hover:bg-primary rounded-md hover:text-gray-200">
                  <Link to="/dashboard/addproducts">
                    <FaCartPlus className="w-6 h-6 text-gray-500"></FaCartPlus>
                    <span className="ml-3">Add Product</span>
                  </Link>
                </li>

                <li className="hover:bg-primary rounded-md hover:text-gray-200">
                  <Link to="/dashboard/myproducts">
                    <FaBoxOpen className="w-6 h-6 text-gray-500"></FaBoxOpen>
                    <span className="ml-3">My Products</span>
                  </Link>
                </li>
              </div>
            )}
            {buyer && (
              <div>
                <li className="hover:bg-primary rounded-md hover:text-gray-200">
                  <Link to="/dashboard/addproducts">
                    <FaCartPlus className="w-6 h-6 text-gray-500"></FaCartPlus>
                    <span className="ml-3">Add Product</span>
                  </Link>
                </li>

                <li className="hover:bg-primary rounded-md hover:text-gray-200">
                  <Link to="/dashboard/myproducts">
                    <FaBoxOpen className="w-6 h-6 text-gray-500"></FaBoxOpen>
                    <span className="ml-3">My Products</span>
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
