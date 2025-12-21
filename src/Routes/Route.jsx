import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Error from "../Pages/Error/Error";
import ContestDetails from "../Pages/ContestDetails/ContestDetails";

import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import ContestAprove from "../Pages/ContestAprove/ContestAprove";
import AllContest from "../Pages/AllContest/AllContest";
import Payment from "../Pages/Payment/Payment";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import Profile from "../Pages/Profile/Profile";
import Myjoiningcontest from "../Pages/Myjoiningcontest/Myjoiningcontest";
import ManagaUser from "../Pages/ManageUser/ManagaUser";
import CreateContest from "../Pages/CreateContest/CreateContest";
import Setwinner from "../Pages/Setwinner/Setwinner";
import Mycreatedcontest from "../Pages/Mycreatedcontest/Mycreatedcontest";
import Mywinningcontest from "../Pages/Mywiningcontest/Mywinningcontest";
import AdminRoute from "../Hook/AdminRoute";
import Motivation from "../Pages/Motivation/Motivation";

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
        element: (
          <PrivateRoute>
            <ContestDetails></ContestDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-contest",
        element: (
          <PrivateRoute>
            <CreateContest></CreateContest>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-contest",
        Component: AllContest,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/motivation",
        Component: Motivation,
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
        element: (
          <AdminRoute>
            <ContestAprove></ContestAprove>
          </AdminRoute>
        ),
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
      {
        path: "all-user",
        element: (
          <AdminRoute>
            <ManagaUser></ManagaUser>
          </AdminRoute>
        ),
      },
      {
        path: "set-winner",
        Component: Setwinner,
      },
      {
        path: "my-created-contest",
        Component: Mycreatedcontest,
      },
      {
        path: "my-winning-contest",
        Component: Mywinningcontest,
      },
    ],
  },

  {
    path: "*",
    Component: Error,
  },
]);
