import { AppStateI } from "./types";

const initalStateApp: AppStateI = {
  dispatch: () => {},
  auth: {
    loading: true,
    token: "",
    auth: false,
  },
  roulettes: [],
};

export default initalStateApp;
