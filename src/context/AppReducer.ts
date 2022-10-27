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
    //for focues roulette
    case ActionTypes.ADD_FOCUS_ROULETTE: {
      return {
        ...state,
        focusRoulette: payload,
      };
    }
    case ActionTypes.REMOVE_FOCUS_ROULETTE: {
      return {
        ...state,
        focusRoulette: null,
      };
    }
    //sessions
    case ActionTypes.ADD_SESSION: {
      return {
        ...state,
        sessions: {
          loading: false,
          data: state.sessions.data
            ? [...state.sessions.data, payload]
            : [payload],
        },
      };
    }
    case ActionTypes.ADD_SESSIONS: {
      return {
        ...state,
        sessions: {
          loading: false,
          data: payload,
        },
      };
    }
    case ActionTypes.REMOVE_SESSION: {
      return {
        ...state,
        sessions: {
          loading: false,
          data: state.sessions.data
            ? state.sessions.data.filter((item) => item.id !== payload)
            : null,
        },
      };
    }
    case ActionTypes.REMOVE_SESSIONS: {
      return {
        ...state,
        sessions: {
          loading: false,
          data: null,
        },
      };
    }
    //focus sessions
    case ActionTypes.ADD_FOCUS_SESSION: {
      return { ...state, focusSession: payload };
    }
    case ActionTypes.REMOVE_FOCUS_SESSION: {
      return { ...state, focusSession: null };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
