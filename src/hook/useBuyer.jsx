import axios from "axios";
import { useEffect, useState } from "react";

const useBuyer = (user) => {
  const [buyer, setBuyer] = useState(false);
  console.log(buyer, "use buyer line 6")
  


  useEffect(() => {
    const email = user?.email;

    if (email) {
      axios
        .get(`http://localhost:5000/api/v1/user/buyer/${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setBuyer(res?.data?.isBuyer);
        });
    }
  }, [user]);
  return [buyer];
};
export default useBuyer;
