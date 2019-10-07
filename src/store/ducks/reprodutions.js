import { createReducer, createActions } from "reduxsauce";
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  reprodutionGet: ["token", "term"],
  reprodutionPending: [],
  reprodutionSuccess: ["reprodutions"],
  reprodutionError: ["error"]
});

export const ReprodutionsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  // data: [],
});

/* Reducers */

export const ReprodutionError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    reprodutionError: true,
    reprodutionPending: false
  };
};

export const ReprodutionSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    list: action.reprodutions,
    reprodutionError: true,
    reprodutionPending: false
  };
};

export const ReprodutionPending = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: action.reprodutions,
    reprodutionPending: true
  };
};

/* Reducers to types */

export const reprodution = createReducer(INITIAL_STATE, {
  [Types.REPRODUTION_ERROR]: ReprodutionError,
  [Types.REPRODUTION_PENDING]: ReprodutionPending,
  [Types.REPRODUTION_SUCCESS]: ReprodutionSuccess
});
