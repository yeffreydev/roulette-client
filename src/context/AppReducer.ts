import { ActionTypes, AppActionI, AppStateI } from "./types";

const appReducer = (state: AppStateI, action: AppActionI): AppStateI => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.USER_AUTH: {
      return { ...state, auth: payload };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
