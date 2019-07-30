// import { createActions, createReducer } from "reduxsauce";
// import Immutable from "seamless-immutable";

/**
 * CREATING ACTIONS TYPES
 */
export const Types = {
  ASYNCDATA: "HOME/ASYNC"
};

// const INITIAL_STATE = {
//   loading: false,
//   data: [],
//   error: null
// };

export const Creators = {
  request: () => ({
    type: Types.ASYNCDATA
  }),

  getData: data => ({
    type: Types.DATALOAD,
    payload: data
  })
};
