import { all, takeEvery } from "redux-saga/effects";

import { Types as PlaylistsTypes } from "../ducks/playlist";
import { AlbumsTypes } from "../ducks/albums";

import { getPlaylists, createPlaylist } from "./playlist";
import { Types } from "../ducks/home";
import { asyncLoadHome } from "./home";

export default function* rootSaga() {
  yield all([
    takeEvery(Types.ASYNCDATA, asyncLoadHome),
    takeEvery(PlaylistsTypes.LOADING, getPlaylists),
    takeEvery(PlaylistsTypes.DATACREATE, createPlaylist)
  ]);
}
