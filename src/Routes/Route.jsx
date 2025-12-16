import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Error from "../Pages/Error/Error";
import ContestDetails from "../Pages/ContestDetails/ContestDetails";
import CreateContest from "../Pages/CreateContest/CreateContest";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import ContestAprove from "../Pages/ContestAprove/ContestAprove";
import AllContest from "../Pages/AllContest/AllContest";
import Payment from "../Pages/Payment/Payment";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import Profile from "../Pages/Profile/Profile";
import Myjoiningcontest from "../Pages/Myjoiningcontest/Myjoiningcontest";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/contest-details/:id",
        Component: ContestDetails,
      },
      {
        path: "/create-contest",
        Component: CreateContest,
      },
      {
        path: "/all-contest",
        Component: AllContest,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "contest-aprove",
        element: <ContestAprove></ContestAprove>,
      },
      {
        path: "payment/:id",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {},
      {
        path: "my-contest",
        Component: Myjoiningcontest,
      },
    ],
  },

  {
    path: "*",
    Component: Error,
  },
]);
