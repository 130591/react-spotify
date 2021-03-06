import { createReducer, createActions } from "reduxsauce";
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  fetchUserSuccess: ["user"],
  fetchUserError: [],
  addSongToLibrarySuccess: ["songId"],
  addSongToLibraryError: []
});

export const UserTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  user: {},
  fetchUserError: false
});

/* Reducers */

const FetchUserSuccess = (state = INITIAL_STATE, action) => {
  return {
    user: action.user,
    fetchUserError: false
  };
};

const FetchUserError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchUserError: true
  };
};

/* Reducers to types */

export const user = createReducer(INITIAL_STATE, {
  [Types.FETCH_USER_SUCCESS]: FetchUserSuccess,
  [Types.FETCH_USER_ERROR]: FetchUserError
});
