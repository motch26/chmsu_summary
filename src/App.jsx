import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage, { loginPageAction } from "./components/Login";
import HomeLayout from "./components/Layouts/HomeLayout";
import Home from "./components/Home";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={<LoginPage />}
        path="/"
        action={loginPageAction}
        loader={() => ({ loader: 1 })}
      />
      <Route element={<HomeLayout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
