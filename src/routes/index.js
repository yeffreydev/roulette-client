import { Routes, Route } from "react-router-dom";
import Header from "./../components/Header";
import Login from "./../pages/Login";
import Home from "./../pages/Home";
import Landing from "./../pages/Landing";
import Register from "./../pages/Register";
import Error from "./../pages/Error";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Header />} />
        {/* header only on development, this is a null element  */}
        <Route path="/app" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route path="/app" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};
export default Router;
