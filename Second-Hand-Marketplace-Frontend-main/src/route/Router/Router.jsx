import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import ContactUs from "../../pages/ContactUs/ContactUs";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AdminRoute from "../AdminRoute/AdminRoute";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import Categories from "../../pages/Categories/Categories";
import Category from "../../pages/Category/Category";
import Blog from "../../pages/Blog/Blog";
import NotFound from "../../pages/NotFound/NotFound";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import HelpCenter from "../../pages/HelpCenter/HelpCenter";
import TermsOfService from "../../pages/TermsOfService/TermsOfService";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "../../pages/CookiePolicy/CookiePolicy";
import SellerRoute from "../SellerRoute/SellerRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/categories", element: <Categories /> },
      { path: "/category/:id", element: <PrivateRoute><Category /></PrivateRoute> },
      { path: "/blog", element: <Blog /> },
      { path: "/help-center", element: <HelpCenter /> },
      { path: "/terms-of-service", element: <TermsOfService /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/cookie-policy", element: <CookiePolicy /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/contact", element: <PrivateRoute><ContactUs /></PrivateRoute> },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      { path: "/dashboard", element: <MyOrders /> },
      { path: "/dashboard/my-orders", element: <BuyerRoute><MyOrders /></BuyerRoute> },
      { path: "/dashboard/add-product", element: <SellerRoute><AddProduct /></SellerRoute> },
      { path: "/dashboard/my-products", element: <SellerRoute><MyProducts /></SellerRoute> },
      { path: "/dashboard/all-sellers", element: <AdminRoute><AllSellers /></AdminRoute> },
      { path: "/dashboard/all-buyers", element: <AdminRoute><AllBuyers /></AdminRoute> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
