import { FormEvent, useContext, useState } from "react";
import Main from "./../components/Main";
import { Link } from "react-router-dom";
import "./../media/css/Login.css";
import Cookies from "universal-cookie";

import auth from "../api/auth";
import AppContext from "../context/AppContext";
import { addToken } from "../context/AppActions";
const Login = () => {
  const { dispatch } = useContext(AppContext);
  const [form, setForm] = useState({ username: "", password: "" });
  const cookies = new Cookies();
  const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    let name = e.currentTarget.name;
    if (name === "username" || name === "password") {
      let newForm = { ...form, [name]: value };
      setForm(newForm);
    }
  };

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await auth.authLogin(form);
    if (res.status === 200) {
      cookies.set("auth", JSON.stringify(res.res), { path: "/" });
      addToken(res.res.token, dispatch);
      return console.log(res);
    }
    console.log(res);
  };

  return (
    <Main>
      <form onSubmit={login} className="l-form">
        <div className="l-form-group l-form-header">
          <span className="l-form-logo">R 2-7000</span>
        </div>
        <div className="l-form-group">
          <label htmlFor="l-username">username or email</label>
          <input
            name="username"
            id="l-username"
            onChange={changeForm}
            value={form.username}
            placeholder="username"
            autoComplete="off"
          />
        </div>
        <div className="l-form-group">
          <label htmlFor="l-password">password</label>
          <input
            name="password"
            id="l-password"
            onChange={changeForm}
            value={form.password}
            placeholder="password"
            autoComplete="off"
          />
        </div>
        <input id="l-form-submit" type="submit" value="Login" />
        <div className="l-form-group l-form-footer">
          <span>
            if don't have an account <Link to="/register">register</Link>
          </span>
        </div>
      </form>
    </Main>
  );
};
export default Login;
