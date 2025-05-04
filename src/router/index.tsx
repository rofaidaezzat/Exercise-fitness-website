import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages";
import Layout from "../pages/Layout";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/Aboutus/AboutUs";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Exercise from "../pages/Exercise";
import Dashboard from "../pages/Dashboard/Dashboard";
import ResetPass from "../pages/Forget&ResetPass/ResetPass";
import ForgetPass from "../pages/Forget&ResetPass/ForgetPass";
import ProtectedRoute from "../auth/ProtectedRoute";
const storageKey = "loggedInUser";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />

        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="ResetPass" element={<ResetPass />} />
        <Route path="ForgetPass" element={<ForgetPass />} />

        <Route
          path="exercises"
          element={
            <ProtectedRoute
              isAllowed={!!userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <Exercise />
            </ProtectedRoute>
          }
        />
      </Route>
    </>
  )
);

export default router;
