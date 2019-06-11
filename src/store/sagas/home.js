import { put, call } from "redux-saga/effects";
import { api } from "../../services";

import { Creators as homeActions } from "../ducks/home";
import { Creators as ErrosActions } from "../ducks/error";

export function* asyncLoadHome() {
  try {
    const resp = yield call(api.get, "http://localhost:3333/home");

    yield put(homeActions.getData(resp.data));
  } catch (err) {
    yield put(
      ErrosActions.setError("dander", "Não foi possível obter os dados.")
    );
  }
}
