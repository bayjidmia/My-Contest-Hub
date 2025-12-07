import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app.css";
import { router } from "./Routes/Route.jsx";
import { RouterProvider } from "react-router";
import Authprovider from "./Authprovide/Provider/Authprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);
