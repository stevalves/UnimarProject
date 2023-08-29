import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Ead from "../pages/Ead/Ead";
import Me from "../pages/Me/Me";
import UniTalk from "../pages/UniTalk/UniTalk";
import Layout from "../layouts/Layout";
import UniTalkLayout from "../layouts/UniTalkLayout";
import Login from "../pages/UniTalk/Login/Login";
import Register from "../pages/UniTalk/Register/Register";
import Dashboard from "../pages/UniTalk/Dashboard/Dashboard";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Homepage />} />
        <Route path="ead" element={<Ead />} />
        <Route path="me" element={<Me />} />
      </Route>
      <Route path="/unitalk" element={<UniTalkLayout />}>
        <Route path="" element={<UniTalk />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default Router;
