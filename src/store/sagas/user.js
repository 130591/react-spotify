import { call } from "redux-saga/effects";
import { UserService } from "../../services/userService";
import Creators from "../ducks/token";

import { BrowserService } from "../../services/browseService";

export function* userToken() {
  const token = yield call(UserService.Token);

  Creators.setToken(token);
}

export function* recently() {
  const token = yield call(UserService.Token);

  // const resp = yield call(BrowserService.fetchRecentlyPlay, token, 5);
  // console.log(resp);
}
