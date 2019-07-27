import { put, call } from "redux-saga/effects";

// DATA SERVICE
import { SearchService } from "../../services/searchService";

// ACTIONS
import { Creators as ErrosActions } from "../ducks/error";
import Creators from "../ducks/reprodutions";

export function* asyncSearch(data) {
  try {
    yield put(Creators.reprodutionPending());

    const { token, term } = data;
    const resp = yield call(SearchService.fetchSearching, token, term);

    yield put(Creators.reprodutionSuccess(resp.data));
  } catch (err) {
    yield put(Creators.reprodutionError());
    yield put(
      ErrosActions.setError(
        "dander",
        "Pequisa não encontrou este termo, favor tente outro."
      )
    );
  }
}
