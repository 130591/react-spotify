import { all, takeEvery } from "redux-saga/effects";

import { AlbumsTypes } from "../ducks/albums";

import { Types } from "../ducks/home";
import { asyncLoadHome } from "./home";

import { asyncSearch } from "./search";
import { ReprodutionsTypes } from "../ducks/reprodutions";

import { Playlists, fetchPlaylist } from "./playlist";
import { PlaylistTypes } from "../ducks/playlist";

import { recently } from "./user";
import { BrowseTypes } from "../ducks/browse";

export default function* rootSaga() {
  yield all([
    takeEvery(Types.ASYNCDATA, asyncLoadHome),
    takeEvery(ReprodutionsTypes.REPRODUTION_GET, asyncSearch),
    takeEvery(PlaylistTypes.CREATE_PLAYLIST, Playlists),
    takeEvery(PlaylistTypes.GET_PLAYLIST, fetchPlaylist),
    takeEvery(BrowseTypes.RECENTLY_PLAYER_PENDING, recently)
  ]);
}
