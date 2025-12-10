import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app.css";
import { router } from "./Routes/Route.jsx";
import { RouterProvider } from "react-router";
import Authprovider from "./Authprovide/Provider/Authprovider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </QueryClientProvider>
  </StrictMode>
);
