import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  searching: ["data"],
  searchingPending: [],
  searchingError: ["data"],
  tracks: ["data"],
  albums: ["data"],
  artist: ["data"]
});

export const SearchTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  albums: [],
  artist: {},
  pending: false,
  error: false,
  referenceTracks: []
});

/* Reducers */

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

export const searchingAlbums = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    albums: { ...action.data.albums },
    error: false,
    pending: false,
  };
};

export const searchingArtists = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    artist: { ...action.data.artists },
    error: false,
    pending: false,
  };
};

export const ReferenceTracks = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    referenceTracks: action.data,
    error: false,
    pending: false,
  };
};

/* Reducers to types */

export const search = createReducer(INITIAL_STATE, {
  [Types.SEARCHING_PENDING]: searchingPending,
  [Types.SEARCHING_ERROR]: searchingError,
  [Types.TRACKS]: ReferenceTracks,
  [Types.ARTIST]: searchingArtists,
  [Types.ALBUMS]: searchingAlbums,
});
