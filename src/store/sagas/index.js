import { all, takeEvery } from "redux-saga/effects";

// import { AlbumsTypes } from "../ducks/albums";

import { Types } from "../ducks/home";
import { asyncLoadHome } from "./home";

import { asyncSearch } from "./search";
import { ReprodutionsTypes } from "../ducks/reprodutions";

import { Playlists, createPlaylist } from "./playlist";
import { PlaylistTypes } from "../ducks/playlist";

export default function* rootSaga() {
  yield all([
    takeEvery(Types.ASYNCDATA, asyncLoadHome),
    takeEvery(ReprodutionsTypes.REPRODUTION_GET, asyncSearch),
    takeEvery(PlaylistTypes.CREATE_PLAYLIST, createPlaylist),
    takeEvery(PlaylistTypes.GET_PLAYLIST, Playlists),
  ]);
}
