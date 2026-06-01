import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import NotFound from '../../pages/NotFound/NotFound';

const BuyerRoute = ({ children }) => {
  const { userType } = useContext(AuthContext);
  if (userType !== 'buyer') {
    return <NotFound />;
  }
  return children;
};

export default BuyerRoute;
