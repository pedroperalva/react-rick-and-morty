import { getCharByName, getChars } from "../services/api";
import { call, all, put, takeLatest, select } from "redux-saga/effects";
import { getInputData } from "../reducers/index";

function* getCharactersSaga(path) {
  let response = yield call(getChars, path);
  yield put({
    type: "SET_CHARACTERS",
    payload: response,
  });
}

function* getCharactersByNameSaga() {
  let data = yield select(getInputData);
  let response = yield call(getCharByName, data);
  yield put({
    type: "SET_CHARACTERS",
    payload: response,
  });
}

export default function* rootSaga() {
  return yield all([
    yield takeLatest("GET_CHARACTERS_SAGA", getCharactersSaga),
    yield takeLatest("GET_CHARACTERS_BY_NAME_SAGA", getCharactersByNameSaga),
  ]);
}
