import { AppStateI } from "./types";

const initalStateApp: AppStateI = {
  dispatch: () => {},
  auth: {
    loading: true,
    token: "",
    auth: false,
  },
  roulettes: [],
  focusRoulette: null,
  sessions: {
    loading: true,
    data: null,
  },
  focusSession: null,
  numbers: {
    loading: true,
    data: [],
  },
  algs: [],
};

export default initalStateApp;
