import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import NotFound from '../../pages/NotFound/NotFound';

const SellerRoute = ({ children }) => {
  const { userType } = useContext(AuthContext);
  if (userType !== 'seller') {
    return <NotFound />;
  }
  return children;
};

export default SellerRoute;
