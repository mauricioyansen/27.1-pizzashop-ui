import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/app/Dashboard";
import { SignIn } from "./pages/auth/SignIn";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/signin", element: <SignIn /> }],
  },
]);
