// import { createActions, createReducer } from "reduxsauce";
// import Immutable from "seamless-immutable";

/**
 * CREATING ACTIONS TYPES
 */
export const Types = {
  ASYNCDATA: "HOME/ASYNC"
};

export const request = () => {
  return { type: Types.ASYNCDATA }
}
