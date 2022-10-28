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
    //numbers
    case ActionTypes.ADD_NUMBER: {
      return {
        ...state,
        numbers: { loading: false, data: [...state.numbers.data, payload] },
      };
    }
    case ActionTypes.ADD_NUMBERS: {
      return { ...state, numbers: { loading: false, data: payload } };
    }
    case ActionTypes.UPDATE_NUMBER: {
      return {
        ...state,
        numbers: {
          loading: false,
          data: state.numbers.data.map((item) =>
            item.id === payload.id ? payload : item
          ),
        },
      };
    }
    case ActionTypes.REMOVE_NUMBER: {
      return {
        ...state,
        numbers: {
          loading: false,
          data: state.numbers.data.filter((item) => item.id !== payload),
        },
      };
    }
    case ActionTypes.REMOVE_NUMBERS: {
      return { ...state, numbers: { loading: false, data: [] } };
    }
    //algs
    case ActionTypes.ADD_ALGS: {
      return { ...state, algs: payload };
    }
    case ActionTypes.REMOVE_ALGS: {
      return { ...state, algs: [] };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
