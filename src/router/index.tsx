import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages";
import Layout from "../pages/Layout";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Exercise from "../pages/Exercise";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="exercises" element={<Exercise />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </>
  )
);

export default router;
