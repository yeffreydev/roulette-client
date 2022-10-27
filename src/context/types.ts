import { Dispatch } from "react";
import { RouletteI } from "../types/Roulette";
export enum ActionTypes {
  USER_AUTH = "USER_AUTH",
  ADD_ROULETTE = "ADD_ROULETTE",
  ADD_ROULETTES = "ADD_ROULETTES",
  REMOVE_ROULETTE = "REMOVE_ROULETTE",
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
  roulettes: RouletteI[];
}
