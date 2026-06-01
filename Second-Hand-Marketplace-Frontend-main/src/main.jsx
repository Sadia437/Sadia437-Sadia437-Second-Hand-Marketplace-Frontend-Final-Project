import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/Router/Router.jsx";
import UserContext from "./context/UserContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </QueryClientProvider>
  </React.StrictMode>
);
