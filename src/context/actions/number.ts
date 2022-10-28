import { Dispatch } from "react";
import { NumberRouletteI } from "../../types/NumberRoulette";
import { ActionType, ActionTypes } from "../types";

//numbers
const addNumber = (
  n: NumberRouletteI,
  dispatch: Dispatch<ActionType<NumberRouletteI>>
) => {
  dispatch({
    type: ActionTypes.ADD_NUMBER,
    payload: n,
  });
};
const addNumbers = (
  ns: NumberRouletteI[],
  dispatch: Dispatch<ActionType<NumberRouletteI[]>>
) => {
  dispatch({
    type: ActionTypes.ADD_NUMBERS,
    payload: ns,
  });
};
const updateNumber = (
  n: NumberRouletteI,
  dispatch: Dispatch<ActionType<NumberRouletteI>>
) => {
  dispatch({
    type: ActionTypes.UPDATE_NUMBER,
    payload: n,
  });
};

const removeNumber = (
  id: string | number,
  dispatch: Dispatch<ActionType<string | number>>
) => {
  dispatch({
    type: ActionTypes.REMOVE_NUMBER,
    payload: typeof id === "string" ? parseInt(id) : id,
  });
};
const removeNumbers = (dispatch: Dispatch<ActionType<null>>) => {
  dispatch({
    type: ActionTypes.REMOVE_NUMBERS,
    payload: null,
  });
};

const numberActions = {
  addNumber,
  addNumbers,
  updateNumber,
  removeNumber,
  removeNumbers,
};
export default numberActions;
