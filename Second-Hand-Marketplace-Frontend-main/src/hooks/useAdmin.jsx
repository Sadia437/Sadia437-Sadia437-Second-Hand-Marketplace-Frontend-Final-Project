import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`${BASE_URL}/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
