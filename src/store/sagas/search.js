import { put, call } from "redux-saga/effects";

// DATA SERVICE
import { SearchService } from "../../services/searchService";

// ACTIONS
import { Creators as ErrosActions } from "../ducks/error";
import Creators from "../ducks/search";

export function* asyncSearch(data) {
  try {
    yield put(Creators.searchingPending());

    const { token, term } = data;

    const resp = yield call(SearchService.fetchSearching, token, term);
    
    const tracks = yield call(SearchService.fetchTracksAlbums, token, resp.data.albums.items[0].id);

    yield put(Creators.tracks(tracks.data));

    yield put(Creators.searching(resp.data));
  
  } catch (err) {
    yield put(ErrosActions.reprodutionError());
    yield put(
      ErrosActions.setError(
        "dander",
        "Pequisa não encontrou este termo, favor tente outro."
      )
    );
  }
}
