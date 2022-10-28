import { Dispatch } from "react";
import { AlgorithmI } from "../../types/Algorithm";
import { ActionType, ActionTypes } from "../types";

const addAlgs = (
  algs: AlgorithmI,
  dispatch: Dispatch<ActionType<AlgorithmI>>
) => {
  dispatch({
    type: ActionTypes.ADD_ALGS,
    payload: algs,
  });
};

const removeAlgs = (dispatch: Dispatch<ActionType<null>>) => {
  dispatch({
    type: ActionTypes.REMOVE_ALGS,
    payload: null,
  });
};
const algorithmActions = {
  addAlgs,
  removeAlgs,
};

export default algorithmActions;
