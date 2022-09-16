import { call, put, takeEvery } from "redux-saga/effects";
import { getUsers, getUsersSuccess, getUsersError } from "./userSlice";
import axios from "axios";

function* onGetUsers() {
  try {
    const { data } = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/users")
    );
    yield put(getUsersSuccess(data));
  } catch (ex) {
    yield put(getUsersError(ex.message));
  }
}

function* userSaga() {
  yield takeEvery(getUsers.type, onGetUsers);
}

export default userSaga;
