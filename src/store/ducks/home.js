// import { createActions, createReducer } from "reduxsauce";
// import Immutable from "seamless-immutable";

/**
 * CREATING ACTIONS TYPES
 */
export const Types = {
  ASYNCDATA: "HOME/ASYNC",
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
        data: action.payload,
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
    type: Types.ASYNCDATA
  }),

  getData: data => ({
    type: Types.DATALOAD,
    payload: data
  })
};
