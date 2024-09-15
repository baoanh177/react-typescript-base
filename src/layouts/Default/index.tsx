import Header from "@/components/layouts/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return <>
    <Header />
    <Outlet />
  </>
};

export default DefaultLayout;
