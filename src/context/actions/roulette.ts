import { Dispatch } from "react";
import { RouletteI } from "../../types/Roulette";
import { ActionType, ActionTypes } from "../types";
//for roulettes array
const addRoulettes = (
  roulettes: RouletteI[],
  dispatch: Dispatch<ActionType<RouletteI[]>>
) => {
  dispatch({
    type: ActionTypes.ADD_ROULETTES,
    payload: roulettes,
  });
};
const addRoulette = (
  roulette: RouletteI,
  dispatch: Dispatch<ActionType<RouletteI>>
) => {
  dispatch({
    type: ActionTypes.ADD_ROULETTE,
    payload: roulette,
  });
};
const removeRoulette = (
  id: number | string,
  dispatch: Dispatch<ActionType<number | string>>
) => {
  dispatch({
    type: ActionTypes.REMOVE_ROULETTE,
    payload: typeof id === "string" ? parseInt(id) : id,
  });
};

//for roulette focus
const addFocusRoulette = (
  r: RouletteI,
  dispatch: Dispatch<ActionType<RouletteI | null>>
) => {
  dispatch({
    type: ActionTypes.ADD_FOCUS_ROULETTE,
    payload: r,
  });
};

const removeFocusRoulette = (dispatch: Dispatch<ActionType<null>>) => {
  dispatch({
    type: ActionTypes.REMOVE_FOCUS_ROULETTE,
    payload: null,
  });
};
const actionsRoulette = {
  addRoulette,
  removeRoulette,
  addRoulettes,
  addFocusRoulette,
  removeFocusRoulette,
};

export default actionsRoulette;
