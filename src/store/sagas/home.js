import { put, call } from "redux-saga/effects";

// DATA SERVICE
import { AlbumService } from "../../services/albumService";
import { UserService } from "../../services/userService";
import { BrowserService } from '../../services/browseService';
import { PlayListService } from "../../services/playlistService";

// ACTIONS
import { Creators as ErrosActions } from "../ducks/error";
import Creators from "../ducks/albums";
import CreatorsToken from "../ducks/token";
import CreatorsRep from "../ducks/reprodutions";
import playlistActions from '../ducks/playlist';
import browseActions from '../ducks/browse';
import Users from "../ducks/user";
// UTILS
import { comparator } from '../../utils/comparator';

export function* asyncLoadHome() {
  try {

    yield put(Creators.fetchAlbumsPending());

    // CALL API
    const token = yield call(UserService.Token);

    const user = yield call(UserService.Request, token);

    const resp = yield call(AlbumService.fetchAlbums, token);

    const recently = yield call(BrowserService.fetchRecentlyPlay, token);

    const playlist = yield call(PlayListService.fetchPlaylistUser, user.data.id, token)

    const reprodution = yield call(
      PlayListService.reprodutionList,
      token,
      "tracks"
    );

    // ACTIONS TRIGGERS
    yield put(CreatorsToken.setToken(token));

    yield put(Creators.fetchAlbumsSuccess(resp.data));

    yield put(Users.fetchUserSuccess(user.data));

    yield put(CreatorsRep.reprodutionSuccess(comparator(reprodution.data.items)));

    yield put(browseActions.recentlyPlayer(recently.data))

    yield put(playlistActions.playlistSuccess(playlist.data))
  } catch (err) {
    yield put(Creators.fetchAlbumsError());
    yield put(
      ErrosActions.setError("dander", "Não foi possível obter os dados.")
    );
  }
}

export function* asyncAlbum({ token, id }) {
  try {
    // CALL API
    yield put(Creators.fetchAlbumsPending());

    const resp = yield call(AlbumService.albumDetails, token, id);
    console.log(resp)
    yield put(Creators.albumDetailsSuccess(resp.data))

  } catch (err) {
    yield put(Creators.fetchAlbumsError());
    yield put(
      ErrosActions.setError("dander", "Título não encontrado.")
    );
  }
}