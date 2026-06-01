import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";

const Header = () => {
  const { user, logOut, userType } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const menuItems = (
    <>
      <li>
        <Link to="/" className="hover:text-primary font-inter">Home</Link>
      </li>
      <li>
        <Link to="/categories" className="hover:text-primary font-inter">Categories</Link>
      </li>
      <li>
        <Link to="/blog" className="hover:text-primary font-inter">Blog</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard" className="hover:text-primary font-inter">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogOut} className="hover:text-primary font-inter">Logout</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/sign-in" className="hover:text-primary font-inter">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50 font-inter">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold text-primary font-inter">
          Second Hand Marketplace
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || "https://via.placeholder.com/40"} alt="User" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile ({userType})
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
