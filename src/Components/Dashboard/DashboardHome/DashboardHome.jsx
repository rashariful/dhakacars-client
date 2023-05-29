import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import useAdmin from "../../../hook/useAdmin";
import useBuyer from "../../../hook/useBuyer";
import useMerchant from "../../../hook/useMerchant";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import Buyerdashboard from "../BuyerDashboard/Buyerdashboard";
import MerchantHome from "../Merchant/MerchantHome/MerchantHome";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [admin] = useAdmin(user);
  const [buyer] = useBuyer(user);
  const [merchant] = useMerchant(user);

  return (
    <div>
      {admin && <AdminDashboard />}
      {merchant && <MerchantHome />}
      {buyer && <Buyerdashboard />}
    </div>
  );
};

export default DashboardHome;
