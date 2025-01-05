import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import AuthProvider from "./Provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Tooltip id="my-tooltip" />
    </AuthProvider>
  </StrictMode>
);
