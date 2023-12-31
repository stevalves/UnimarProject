import { Outlet } from "react-router-dom";
import Aside from "../../pages/Dashboard/Aside";
import Nav from "../../pages/Dashboard/Nav";
import ScrollToTop from "../../utils/ScrollToTop";

const DashboardLayout = () => {
  return (
    <ScrollToTop>
      <div className="bg-gradient-to-r from-forest-800 min-h-screen to-forest-900 py-32 font-logo">
        <div className="container h-full mx-auto flex">
          <Nav />
          <Outlet />
          <Aside />
        </div>
      </div>
    </ScrollToTop>
  );
};

export default DashboardLayout;
