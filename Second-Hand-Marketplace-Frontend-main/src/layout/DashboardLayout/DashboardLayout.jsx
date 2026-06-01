import React, { useContext } from "react";
import Header from "../../components/Shared/Header/Header";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../context/UserContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer lg:drawer-open">
        <input id="my-dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content md:p-10">
        
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-dashboard"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
         
            {user?.userType === 'buyer' && (
              <li>
                <NavLink
                  to="/dashboard/my-orders"
                  className={({ isActive }) =>
                    `px-2 py-1 transition-colors ${
                      isActive
                        ? "border-b-2 border-primary text-primary"
                        : "text-gray-600"
                    }`
                  }
                >
                  My Orders
                </NavLink>
              </li>
            )}
            {user?.userType === 'seller' && (
              <>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/add-product"
                    className={({ isActive }) =>
                      `px-2 py-1 transition-colors ${
                        isActive
                          ? "border-b-2 border-primary text-primary"
                          : "text-gray-600"
                      }`
                    }
                  >
                    Add Product
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/my-products"
                    className={({ isActive }) =>
                      `px-2 py-1 transition-colors ${
                        isActive
                          ? "border-b-2 border-primary text-primary"
                          : "text-gray-600"
                      }`
                    }
                  >
                    My Products
                  </NavLink>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/all-sellers"
                    className={({ isActive }) =>
                      `px-2 py-1 transition-colors ${
                        isActive
                          ? "border-b-2 border-primary text-primary"
                          : "text-gray-600"
                      }`
                    }
                  >
                    All Sellers
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/all-buyers"
                    className={({ isActive }) =>
                      `px-2 py-1 transition-colors ${
                        isActive
                          ? "border-b-2 border-primary text-primary"
                          : "text-gray-600"
                      }`
                    }
                  >
                    All Buyers
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
