import config from "../config";
import { UserI } from "../types/User";

const authLogin = async (user: UserI) => {
  const res = await fetch(`${config.api}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ username: user.username, password: user.password }),
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};

const authRegister = async (user: UserI) => {
  const res = await fetch(`${config.api}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  });
  return {
    status: res.status,
    res: await res.json(),
  };
};
const auth = {
  authLogin,
  authRegister,
};

export default auth;
