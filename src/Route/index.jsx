import { BrowserRouter,  Route, Routes } from "react-router-dom";
import LayoutRoutes from "./LayoutRoutes";
import { lazy, Suspense } from "react";
import Splash from "../components/Ui/Splash";
import AuthLayout from "../Layout/AuthLayout";
import DashboardLayout from "../Layout/DashboardLayout";

const DefaultRoute = lazy(() => import("../Pages/home/home1"));
const Login = lazy(()=>import('../Pages/Auth/Login'));
const Signup = lazy(()=>import('../Pages/Auth/Signup'));

const Router = () => {
  return (
    <BrowserRouter future={{v7_startTransition:true}}>
      <Suspense fallback={<Splash />}>
        <Routes  >
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/signup"} element={<Signup />} />
          <Route element={<DashboardLayout/>}>
                <Route exact path={"/"} element={<DefaultRoute />} />
                <Route path={`/*`} element={<LayoutRoutes />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default Router;
