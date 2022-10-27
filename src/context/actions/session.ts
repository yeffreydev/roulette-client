import { Dispatch } from "react";
import { SessionRouletteI } from "../../types/SessionRoulette";
import { ActionType, ActionTypes } from "../types";

//sesssions
const addSession = (
  s: SessionRouletteI,
  dispatch: Dispatch<ActionType<SessionRouletteI>>
) => {
  dispatch({
    type: ActionTypes.ADD_SESSION,
    payload: s,
  });
};
const addSessions = (
  ss: SessionRouletteI[],
  dispatch: Dispatch<ActionType<SessionRouletteI[]>>
) => {
  dispatch({
    type: ActionTypes.ADD_SESSIONS,
    payload: ss,
  });
};

const removeSession = (
  id: string | number,
  dispatch: Dispatch<ActionType<string | number>>
) => {
  dispatch({
    type: ActionTypes.REMOVE_SESSION,
    payload: typeof id === "string" ? parseInt(id) : id,
  });
};
const removeSessions = (dispatch: Dispatch<ActionType<null>>) => {
  dispatch({
    type: ActionTypes.REMOVE_SESSIONS,
    payload: null,
  });
};
//session focus
const addSessionFocus = (
  s: SessionRouletteI,
  dispatch: Dispatch<ActionType<SessionRouletteI>>
) => {
  dispatch({
    type: ActionTypes.ADD_FOCUS_SESSION,
    payload: s,
  });
};
const removeSessionFocus = (dispatch: Dispatch<ActionType<null>>) => {
  dispatch({
    type: ActionTypes.REMOVE_FOCUS_SESSION,
    payload: null,
  });
};
const sessionActions = {
  addSession,
  addSessions,
  removeSession,
  removeSessions,
  //focus
  addSessionFocus,
  removeSessionFocus,
};
export default sessionActions;
