import axios from "axios";
import { useEffect, useState } from "react";

const useMerchant = (user) => {
  const [merchant, setMerchant] = useState(false);
  console.log(merchant, "use merchant line 6")

  useEffect(() => {
    const email = user?.email;

    if (email) {
      axios
     
        .get(`https://dhaka-cars-server-3othdj4dj-rashariful.vercel.app/api/v1/user/merchant/${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
            setMerchant(res?.data?.setMerchant);
        });
    }
  }, [user]);
  return [merchant];
};
export default useMerchant;
