import { combineReducers } from "redux";

import { Song } from "./song";
import { user } from "./user";
import { sound } from "./sound";
import { token } from "./token";
import error from "./error";
import { browser } from "./browse";
import { playlist } from "./playlist";
import { albums } from "./albums";
import { artists } from "./artists";
import { search } from "./search";
import { reprodution } from "./reprodutions";

const reducers = combineReducers({
  playlist,
  artists,
  browser,
  error,
  Song,
  sound,
  token,
  albums,
  search,
  reprodution,
  user
});

export default reducers;
