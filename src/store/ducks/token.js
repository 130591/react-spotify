import { createReducer, createActions } from "reduxsauce";
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  setToken: ["token"],
  getToken: []
});

export const TokenTypes = Types;
const CreatorsToken = Creators;
export default CreatorsToken;

/* Initial State */

export const INITIAL_STATE = Immutable({
  token: ""
});

/* Reducers */

const SetToken = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    token: action.token
  };
};

const GetToken = (state = INITIAL_STATE, action) => {
  return {
    ...state
  };
};

/* Reducers to types */

export const token = createReducer(INITIAL_STATE, {
  [Types.SET_TOKEN]: SetToken,
  [Types.GET_TOKEN]: GetToken
});
