import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./../components/Header";
import Login from "./../pages/Login";
import Home from "./../pages/Home";
import Landing from "./../pages/Landing";
import Register from "./../pages/Register";
import Error from "./../pages/Error";
import { useContext } from "react";
import AppContext from "../context/AppContext";
const Router = () => {
  const { auth } = useContext(AppContext);

  return (
    <>
      <Routes>
        <Route path="/*" element={<Header />} />
        {/* header only on development, this is a null element  */}
        <Route path="/app" element={null} />
      </Routes>
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route
          path="/app"
          element={
            auth.loading ? null : !auth.auth ? (
              <Navigate to="/login" replace />
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="/login"
          element={
            auth.loading ? null : auth.auth ? (
              <Navigate to="/app" replace />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/register"
          element={
            auth.loading ? null : auth.auth ? (
              <Navigate to="/app" replace />
            ) : (
              <Register />
            )
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};
export default Router;
