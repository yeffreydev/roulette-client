import { Dispatch } from "react";
import { AlgorithmI } from "../types/Algorithm";
import { NumberRouletteI } from "../types/NumberRoulette";
import { RouletteI } from "../types/Roulette";
import { SessionRouletteI } from "../types/SessionRoulette";
export enum ActionTypes {
  USER_AUTH = "USER_AUTH",
  //array roulettes
  ADD_ROULETTE = "ADD_ROULETTE",
  ADD_ROULETTES = "ADD_ROULETTES",
  REMOVE_ROULETTE = "REMOVE_ROULETTE",
  REMOVE_ROULETTES = "REMOVE_ROULETTES",
  //focus roulette
  ADD_FOCUS_ROULETTE = "ADD_FOCUS_ROULETTE",
  REMOVE_FOCUS_ROULETTE = "REMOVE_FOCUS_ROULETTE",
  //sessions
  ADD_SESSION = "ADD_SESSION",
  ADD_SESSIONS = "ADD_SESSIONS",
  REMOVE_SESSION = "REMOVE_SESSION",
  REMOVE_SESSIONS = "REMOVE_SESSIONS",
  //focus session
  ADD_FOCUS_SESSION = "ADD_FOCUS_SESSION",
  REMOVE_FOCUS_SESSION = "REMOVE_FOCUS_SESSION",
  //numbers
  ADD_NUMBER = "ADD_NUMBER",
  ADD_NUMBERS = "ADD_NUMBERS",
  REMOVE_NUMBER = "REMOVE_NUMBER",
  UPDATE_NUMBER = "UPDATE_NUMBER",
  REMOVE_NUMBERS = "REMOVE_NUMBERS",
  //algs
  ADD_ALGS = "ADD_ALGS",
  REMOVE_ALGS = "REMOVE_ALGS",
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

export interface DataObject<Type> {
  loading: boolean;
  data: Type;
}

export interface AppStateI {
  dispatch: Dispatch<AppActionI>;
  auth: AuthI;
  roulettes: RouletteI[];
  focusRoulette: RouletteI | null;
  sessions: DataObject<SessionRouletteI[] | null>;
  focusSession: SessionRouletteI | null;
  numbers: DataObject<NumberRouletteI[]>;
  algs: AlgorithmI[];
}
