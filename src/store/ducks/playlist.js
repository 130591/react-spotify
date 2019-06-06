/**
 * CREATING ACTIONS TYPES
 */
export const Types = {
  DATALOAD: "PLAYLIST/LOAD_SUCCESS",
  LOADING: "PLAYLIST/LOADING",
  DATAERROR: "PLAYLIST/LOAD_ERROR",
  DATACREATE: "PLAYLIST/LOAD_LIST"
};

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function playlist(state = INITIAL_STATE, action) {
  console.log("executou reducer !!", action);
  switch (action.type) {
    case Types.LOADING:
      return {
        ...state,
        loading: true
      };
    case Types.DATALOAD:
      return {
        data: { data: action.payload.data, loading: false, error: false },
        error: false,
        loading: false
      };
    case Types.DATAERROR:
      return {
        data: [],
        error: true,
        loading: false
      };
    case Types.DATACREATE:
      return {
        ...state,
        error: false,
        loading: false
      };
    default:
      return state;
  }
}

export const Creators = {
  create: name => ({
    type: Types.DATACREATE,
    payload: { name }
  }),
  getPlaylistsRequest: () => ({
    type: Types.LOADING
  }),

  getPlaylistsSuccess: data => ({
    type: Types.DATALOAD,
    payload: { data }
  })
};
