import axios from "axios";
import { useEffect, useState } from "react";

const useMerchant = (user) => {
  const [merchant, setMerchant] = useState(false);
  console.log(merchant, "line 6 from merchant")

  useEffect(() => {
    const email = user?.email;

    if (email) {
      axios
     
        .get(`${process.env.REACT_APP_ROOT}/api/v1/user/merchant/${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
            setMerchant(res?.data?.isMerchant);
        });
    }
  }, [user]);
  return [merchant];
};
export default useMerchant;
