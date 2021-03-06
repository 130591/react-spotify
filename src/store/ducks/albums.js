import { createReducer, createActions } from "reduxsauce";
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  fetchAlbumsAsyncData: ["accessToken"],
  fetchAlbumsPending: [],
  fetchAlbumsSuccess: ["albums"],
  fetchAlbumsError: [],
  albumDetails: ['token','id'],
  albumDetailsSuccess: ['data']
});

export const AlbumsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  albums: [],
  albumDetails: {},
  fetchAlbumsPending: false,
  fetchAlbumsSuccess: false,
  fetchAlbumsError: false,
});

/* Reducers */
const FetchAlbumsPending = (state = INITIAL_STATE, action) => {
  return { ...state, fetchAlbumsPending: true };
};

const fetchAlbumsSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, albums: action.albums, fetchAlbumsError: false, fetchAlbumsPending: false };
};

const fetchAlbumsError = (state = INITIAL_STATE, action) => {
  return { ...state, fetchAlbumsError: true, fetchAlbumsPending: false };
};

const fetchAlbumDetails = (state = INITIAL_STATE, action) => {
  console.log(action.data)
  return { albumDetails: { ...action.data }, fetchAlbumsPending: false };
};

/* Reducers to types */

export const albums = createReducer(INITIAL_STATE, {
  [Types.FETCH_ALBUMS_PENDING]: FetchAlbumsPending,
  [Types.FETCH_ALBUMS_SUCCESS]: fetchAlbumsSuccess,
  [Types.FETCH_ALBUMS_ERROR]: fetchAlbumsError,
  [Types.ALBUM_DETAILS_SUCCESS]: fetchAlbumDetails,
});
