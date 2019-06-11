import { all, takeEvery } from "redux-saga/effects";

import { asyncLoadHome } from "./home";
import { Types as PlaylistsTypes } from "../ducks/playlist";

import { getPlaylists, createPlaylist } from "./playlist";
import { Types as HomeTypes } from "../ducks/home";

export default function* rootSaga() {
  yield all([
    takeEvery(HomeTypes.ASYNCDATA, asyncLoadHome),
    takeEvery(PlaylistsTypes.LOADING, getPlaylists),
    takeEvery(PlaylistsTypes.DATACREATE, createPlaylist)
  ]);
}
