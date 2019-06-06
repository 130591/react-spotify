import { call, put } from "redux-saga/effects";
import { api } from "../../services/index";

import { Creators as PlaylistsActions } from "../ducks/playlist";
import { Creators as ErrorsActions } from "../ducks/error";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists");

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (err) {
    yield put(
      ErrorsActions.setError("danger", "Não foi possível obter suas playlists.")
    );
  }
}

export function* createPlaylist(id, name) {
  const request = {};
  try {
    const response = yield call(api.post, request, "/playlists");

    yield put(PlaylistsActions.createPlaylist(name));
  } catch (err) {
    yield put(
      ErrorsActions.setError("danger", "Não foi criar uma nova playlist.")
    );
  }
}
