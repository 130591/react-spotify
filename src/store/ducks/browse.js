import { createReducer, createActions } from "reduxsauce";
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  fetchFeaturedError: [],
  fetchCategoriesError: [],
  fetchNewReleasesError: [],
  fetchFeaturedSuccess: ["featured"],
  fetchCategoriesSuccess: ["categories"],
  fetchNewReleasesSuccess: ["newReleases"],
  recentlyPlayer: ['data'],
  recentlyPlayerPending: []
});

export const BrowseTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  // data: [],
  fetchFeaturedError: false,
  view: [],
  recently: []
});

/* Reducers */
const FetchCategoriesSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    view: action.categories.items,
    fetchCategoriesError: false
  };
};

const FetchCategoriesError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchCategoriesError: true
  };
};

const FetchNewReleasesSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    view: action.newReleases.items,
    fetchNewReleasesError: false
  };
};

const FetchNewReleasesError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchNewReleasesError: true
  };
};

const FetchFeaturedSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    view: action.featured.items,
    fetchFeaturedError: false
  };
};

const FetchFeaturedError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchFeaturedError: true
  };
};

const FetchRecently = (state = INITIAL_STATE, action) => {
  return {
    recently: action.data
  };
};

/* Reducers to types */

export const browser = createReducer(INITIAL_STATE, {
  [Types.FETCH_FEATURED_ERROR]: FetchFeaturedError,
  [Types.FETCH_FEATURED_ERROR]: FetchCategoriesError,
  [Types.FETCH_NEW_RELEASES_ERROR]: FetchNewReleasesError,
  [Types.FETCH_FEATURED_SUCCESS]: FetchFeaturedSuccess,
  [Types.FETCH_FEATURED_SUCCESS]: FetchCategoriesSuccess,
  [Types.FETCH_NEW_RELEASES_SUCCESS]: FetchNewReleasesSuccess,
  [Types.RECENTLY_PLAYER]: FetchRecently
});