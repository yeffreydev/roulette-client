import { Dispatch } from "react";
import { RouletteI } from "../../types/Roulette";
import { ActionType, ActionTypes } from "../types";
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

const actionsRoulette = {
  addRoulette,
  removeRoulette,
  addRoulettes,
};

export default actionsRoulette;
