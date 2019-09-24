import { put, call } from "redux-saga/effects";

import { SongService } from '../../services/songService';

export function*  asyncSongPlayer(id) {
  try {
    yield put()

    const resp = yield call(SongService.fetchFeaturesAudio, token, id)
    
  } catch (error) {
    ErrosActions.setError('danger', 'Não foi possivel obter os dados')
  }
}