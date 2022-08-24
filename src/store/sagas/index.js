import { getChars } from "../services/api";
import { call, all, put, takeLatest } from "redux-saga/effects";

function* getCharactersSaga(path) {
  let response = yield call(getChars, path);
  console.log(response);
  yield put({
    type: "SET_CHARACTERS",
    payload: response,
  });
}

export default function* rootSaga() {
  return yield all([
    yield takeLatest("GET_CHARACTERS_SAGA", getCharactersSaga),
  ]);
}
