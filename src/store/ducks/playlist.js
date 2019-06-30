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
  switch (action.type) {
    case Types.LOADING:
      return {
        ...state,
        loading: true
      };
    case Types.DATALOAD:
      return {
        data: { data: action.payload, loading: false, error: false }
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
        ...action.payload
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
