import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import useAdmin from "../../../hook/useAdmin";
import useBuyer from "../../../hook/useBuyer";
import useMerchant from "../../../hook/useMerchant";
import AdminDashboard from "../AdminDashboard/AdminDashboard";


const DashboardHome = () => {
  const {user} = useContext(AuthContext)
  const [admin] = useAdmin(user)
  const [buyer] = useBuyer(user)
  const [merchant] = useMerchant(user)


  return (
   <div>
    {
      admin && (
        <AdminDashboard/>
      )
    }
    {
      merchant && (
<h2 className="text-5xl font-bold text-primary">Merchant dashboard</h2>
      )
    }
    {buyer && (
          <h2 className="text-5xl font-bold text-primary">Buyer dashboard</h2>
        )}
   </div>
  );
};

export default DashboardHome;
