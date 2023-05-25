import axios from "axios";
import { useEffect, useState } from "react";

const useSeller = (user) => {
  const [seller, setSeller] = useState(false);

  useEffect(() => {
    const email = user?.email;

    if (email) {
      axios
        .get(`http://localhost:5000/api/v1/user/seller/${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setSeller(res?.data?.isSeller);
        });
    }
  }, [user]);
  return [seller];
};
export default useSeller;
