import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  getPatients,
  getPatientsSuccess,
  getPatientsError,
} from "./patientSlice";

function* onGetPatients() {
  try {
    const { data } = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/posts")
    );
    yield put(getPatientsSuccess(data));
  } catch (ex) {
    yield put(getPatientsError(ex.message));
  }
}

function* patientSaga() {
  yield takeEvery(getPatients.type, onGetPatients);
}

export default patientSaga;
