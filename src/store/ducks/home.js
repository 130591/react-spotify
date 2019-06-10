import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * CREATING ACTIONS TYPES
 */
export const Types = {
  DATALOAD: "HOME/LOAD_SUCCESS",
  LOADING: "HOME/LOADING",
  DATAERROR: "HOME/LOAD_ERROR"
};

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOADING:
      return {
        ...state,
        loading: true
      };
    case Types.DATALOAD:
      return {
        data: { data: action.payload.data, loading: false, error: false },
        error: false,
        loading: false
      };
    case Types.DATAERROR:
      return {
        data: [],
        error: true,
        loading: false
      };
    default:
      return state;
  }
}

export const Creators = {
  request: () => ({
    type: Types.LOADING
  }),

  getData: data => ({
    type: Types.DATALOAD,
    payload: data
  })
};
