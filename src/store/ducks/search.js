import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  searching: ["data"],
  searchingPending: [],
  searchingError: ["data"],
  tracks: ["data"]
});

export const SearchTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  pending: false,
  error: false,
  referenceTrack: []
});

/* Reducers */

export const getSearching = (state = INITIAL_STATE, action) => {
  return {
    ...action.data,
    pending: false,
    error: false
  };
};

export const searchingPending = (state = INITIAL_STATE) => {
  return {
    ...state,
    pending: true,
    error: false
  };
};

export const searchingError = (state = INITIAL_STATE) => {
  return {
    ...state,
    error: true,
    pending: false
  };
};

export const ReferenceTracks = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    error: false,
    pending: false,
    referenceTracks: action.data
  };
};

/* Reducers to types */

export const search = createReducer(INITIAL_STATE, {
  [Types.SEARCHING_PENDING]: searchingPending,
  [Types.SEARCHING]: getSearching,
  [Types.SEARCHING_ERROR]: searchingError,
  [Types.TRACKS]: ReferenceTracks
});
