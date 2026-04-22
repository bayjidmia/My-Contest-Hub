import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Route.jsx";
import { RouterProvider } from "react-router";
import Authprovider from "./Authprovide/Provider/Authprovider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <Authprovider>
          <RouterProvider router={router} />
        </Authprovider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
