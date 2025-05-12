import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import App from "./App";
import PublicView from "./pages/PublicView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/view",
    element: <PublicView />,
  },
]);
