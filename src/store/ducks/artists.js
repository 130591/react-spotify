import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  fetchArtistsPending: [""],
  fetchArtistsSuccess: ["artists"],
  setArtistIds: ["artistIds"]
});

export const ArtistsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: []
});

/* Reducers */
const SetArtistsIds = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    artistIds: action.artistIds
  };
};

const FetchArtistsPending = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchArtistsPending: true,
    fetchArtistsError: false
  };
};

const FetchArtistsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    artistList: action.artists,
    fetchArtistsError: false,
    fetchArtistsPending: false
  };
};

/* Reducers to types */

export const artists = createReducer(INITIAL_STATE, {
  [Types.FETCH_ARTISTS_PENDING]: FetchArtistsPending,
  [Types.FETCH_ARTISTS_SUCCESS]: FetchArtistsSuccess,
  [Types.SET_ARTIST_IDS]: SetArtistsIds
});
