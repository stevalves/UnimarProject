import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Ead from "../pages/Ead/Ead";
import Me from "../pages/Me/Me";
import UniTalk from "../pages/UniTalk";
import Layout from "./layouts/Layout";
import UniTalkLayout from "./layouts/UniTalkLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterUser from "../pages/Register/User";
import RegisterCompany from "../pages/Register/Company";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "../pages/Dashboard/Home";
import Jobs from "../pages/Dashboard/Jobs";
import AppliedJobs from "../pages/Dashboard/AppliedJobs";
import Profile from "../pages/Dashboard/Profile";

function Router() {
  return (
    <Routes>
      <Route path="/unimar" element={<Layout />}>
        <Route path="" element={<Homepage />} />
        <Route path="ead" element={<Ead />} />
        <Route path="me" element={<Me />} />
      </Route>
      <Route path="/" element={<UniTalkLayout />}>
        <Route path="" element={<UniTalk />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="register/user" element={<RegisterUser />} />
        <Route path="register/company" element={<RegisterCompany />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="" element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="applied" element={<AppliedJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
