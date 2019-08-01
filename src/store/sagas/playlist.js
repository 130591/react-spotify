import { call, put } from "redux-saga/effects";
import { PlayListService } from "../../services/playlistService";

// DATA SERVICE
import { UserService } from "../../services/userService";

import { Creators } from "../ducks/playlist";
import { Creators as ErrorsActions } from "../ducks/error";

export function* Playlists(data) {
  console.log(data);
  try {
    const token = yield call(UserService.Token);

    const resp = yield call(
      PlayListService.createPlaylist,
      data.id,
      data.name,
      token
    );
  } catch (err) {
    yield put(
      ErrorsActions.setError("danger", "Não foi possível obter suas playlists.")
    );
  }
}

export function* fetchPlaylist(data) {
  try {
    const token = yield call(UserService.Token);

    const resp = yield call(PlayListService.fetchPlaylistsMenu, data.id, token);
  } catch (err) {
    yield put(
      ErrorsActions.setError("danger", "Não foi possível obter suas playlists.")
    );
  }
}

export function* createPlaylist() {
  // const request = {};
  try {
    // const response = yield call(api.post, request, "/playlists");
    // yield put(PlaylistsActions.createPlaylist(response.data));
  } catch (err) {
    yield put(
      ErrorsActions.setError("danger", "Não foi criar uma nova playlist.")
    );
  }
}
