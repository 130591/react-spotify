import { call, put } from "redux-saga/effects";

// DATA SERVICE
import { UserService } from "../../services/userService";
import { PlayListService } from "../../services/playlistService";
import { Creators as ErrorsActions } from "../ducks/error";
import Creators from '../ducks/playlist';

export function* Playlists({ id }) {
  try {
    const token = yield call(UserService.Token);

    const resp = yield call(PlayListService.fetchUserPlaylist, id, token);

  } catch (err) {
    yield put(
      ErrorsActions.setError("danger", "Não foi possível obter suas playlists.")
    );
  }
}

export function* createPlaylist(data) {
  try {
    const resp = yield call(PlayListService.createPlaylist, data.id, data.name, data.token);

    put(Creators.playlistSuccess(resp.data))
  } catch (err) {
    yield put(
      ErrorsActions.setError("danger", "Não foi possível obter suas playlists.")
    );
  }
}

