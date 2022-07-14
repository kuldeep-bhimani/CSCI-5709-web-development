import { Routes, Route } from "react-router-dom";
import Post from "./components/Post/Post";
import EditAppreciation from "./components/Appreciation/EditAppreciation";
import Feeds from "./components/Feed/Feeds";
import MyAccount from "./components/ProfilePage/MyAccount";
import AnalyticsAppreciation from "./components/Appreciation/AnalyticsAppreciation";
import Login from "./components/Login/Form";
import Register from "./components/Registration/Form";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword"

import Form from "./components/Login/Form";
import AdminHome from "./components/Admin/AdminHome";
import UserProfile from "./components/ProfilePage/UserProfile";
import CreatePost from "./components/Post/CreatePost";
import EditPost from "./components/Post/EditPost";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/post" element={<Post />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/feeds" element={<Feeds />} />
      <Route path="/editappreciation" element={<EditAppreciation />} />
      <Route path="/userprofile" element={<MyAccount />} />
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/openprofile" element={<UserProfile />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/editpost" element={<EditPost />} />
    </Routes>
  );
};

export default Routing;
