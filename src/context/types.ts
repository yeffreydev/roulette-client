import { Dispatch } from "react";
export enum ActionTypes {
  USER_AUTH = "USER_AUTH",
}
export interface AuthI {
  auth: boolean;
  token: string;
  loading: boolean;
}
export interface AppActionI {
  type: ActionTypes;
  payload: any;
}
export interface ActionType<Type> {
  type: ActionTypes;
  payload: Type;
}

export interface AppStateI {
  dispatch: Dispatch<AppActionI>;
  auth: AuthI;
}
