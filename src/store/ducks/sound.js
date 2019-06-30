import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  updateVolume: ["volume"]
});

export const SoundTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  volume: 100
});

/* Reducers */

const UpdateVolume = (state = INITIAL_STATE, action) => {
  return {
    volume: action.volume
  };
};

/* Reducers to types */

export const sound = createReducer(INITIAL_STATE, {
  [Types.UPDATE_VOLUME]: UpdateVolume
});
