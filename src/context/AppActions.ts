import { Dispatch } from "react";
import { ActionType, ActionTypes, AuthI } from "./types";

export const addToken = (
  token: string,
  dispatch: Dispatch<ActionType<AuthI>>
) => {
  dispatch({
    type: ActionTypes.USER_AUTH,
    payload: { auth: true, token: token, loading: false },
  });
};

export const noTokenProvider = (dispatch: Dispatch<ActionType<AuthI>>) => {
  dispatch({
    type: ActionTypes.USER_AUTH,
    payload: { auth: false, token: "", loading: false },
  });
};

export const removeToken = (dispatch: Dispatch<ActionType<AuthI>>) =>
  noTokenProvider(dispatch);
