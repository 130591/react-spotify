import { put, call } from "redux-saga/effects";

// DATA SERVICE
import { AlbumService } from "../../services/albumService";
import { UserService } from "../../services/userService";
import { PlayListService } from "../../services/playlistService";

// ACTIONS
import { Creators as ErrosActions } from "../ducks/error";
import Creators from "../ducks/albums";
import CreatorsToken from "../ducks/token";
import CreatorsRep from "../ducks/reprodutions";
import Users from "../ducks/user";

export function* asyncLoadHome() {
  try {
    yield put(Creators.fetchAlbumsPending());
    // CALL API
    const token = yield call(UserService.Token);
    
    const user = yield call(UserService.Request, token);

    const resp = yield call(AlbumService.fetchAlbums, token);

    const reprodution = yield call(
      PlayListService.reprodutionList,
      token,
      "tracks"
    );

    // ACTIONS TRIGGERS
    yield put(CreatorsToken.setToken(token));

    yield put(Creators.fetchAlbumsSuccess(resp.data));

    yield put(Users.fetchUserSuccess(user));

    yield put(CreatorsRep.reprodutionSuccess(reprodution.data));

  } catch (err) {
    yield put(Creators.fetchAlbumsError());
    yield put(
      ErrosActions.setError("dander", "Não foi possível obter os dados.")
    );
  }
}
