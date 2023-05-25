import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  console.log(admin, "use admin line 6")

  useEffect(() => {
    const email = user?.email;

    if (email) {
      axios
     
        .get(`https://dhaka-cars-server-3othdj4dj-rashariful.vercel.app/api/v1/user/admin/${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setAdmin(res?.data?.isAdmin);
        });
    }
  }, [user]);
  return [admin];
};
export default useAdmin;
