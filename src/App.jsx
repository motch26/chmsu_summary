import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "page",
    element: <p>Page</p>,
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
