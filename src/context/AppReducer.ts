import { ActionTypes, AppActionI, AppStateI } from "./types";

const appReducer = (state: AppStateI, action: AppActionI): AppStateI => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.USER_AUTH: {
      return { ...state, auth: payload };
    }
    case ActionTypes.ADD_ROULETTES: {
      return { ...state, roulettes: payload };
    }
    case ActionTypes.ADD_ROULETTE: {
      return { ...state, roulettes: [...state.roulettes, payload] };
    }
    case ActionTypes.REMOVE_ROULETTE: {
      return {
        ...state,
        roulettes: state.roulettes.filter((item) => item.id !== payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
