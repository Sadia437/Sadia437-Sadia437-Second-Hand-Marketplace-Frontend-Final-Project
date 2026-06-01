import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Shared/Footer/Footer.jsx";

// Pages
import Home from "./pages/Home/Home.jsx";
import Category from "./pages/Category/Category.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

// Dashboard Pages
import DashboardAddProduct from "./pages/Dashboard/AddProduct/AddProduct.jsx";
import MyProducts from "./pages/Dashboard/MyProducts/MyProducts.jsx";
import AllUsers from "./pages/Dashboard/AllUsers/AllUsers.jsx";
import MyOrders from "./pages/Dashboard/MyOrders/MyOrders.jsx";

// Routes
import PrivateRoute from "./route/PrivateRoute/PrivateRoute.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category/:subcategory?" element={<PrivateRoute><Category /></PrivateRoute>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard/add-product" element={<PrivateRoute><DashboardAddProduct /></PrivateRoute>} />
          <Route path="/dashboard/my-products" element={<PrivateRoute><MyProducts /></PrivateRoute>} />
          <Route path="/dashboard/all-users" element={<PrivateRoute><AllUsers /></PrivateRoute>} />
          <Route path="/dashboard/my-orders" element={<PrivateRoute><MyOrders /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
