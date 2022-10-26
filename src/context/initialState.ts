import { AppStateI } from "./types";

const initalStateApp: AppStateI = {
  dispatch: () => {},
  auth: {
    loading: true,
    token: "",
    auth: false,
  },
};

export default initalStateApp;
