import { call } from "redux-saga/effects";
import { UserService } from "../../services/userService";
import Creators from "../ducks/token";

export function* userToken() {
  const token = yield call(UserService.Token);

  Creators.setToken(token);
}
