import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext"; 

const Navbar = () => {
  const { user, logOut, userType } = useContext(AuthContext);

  return (
    <div className="navbar bg-secondary shadow-md px-5 md:px-10">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">SecondHand</Link>
      </div>
      <div className="flex-none gap-3">
        <Link className="btn btn-ghost" to="/">Home</Link>
        <Link className="btn btn-ghost" to="/blog">Blog</Link>
        {user ? (
          <>
            {userType === "seller" && <Link className="btn btn-ghost" to="/dashboard/add-product">Add Product</Link>}
            <Link className="btn btn-ghost" to="/dashboard/my-orders">My Orders</Link>
            <span className="text-sm">{user.displayName} {userType === "seller" && "(Seller)"}</span>
            <button className="btn btn-error btn-sm" onClick={logOut}>Logout</button>
          </>
        ) : (
          <Link className="btn btn-primary btn-sm" to="/sign-in">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
