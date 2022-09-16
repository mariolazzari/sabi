import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import user from "./userSlice";
import userSaga from "./userSaga";
import patient from "./patientSlice";
import patientSaga from "./patientSaga";

// middleware
const saga = createSagaMiddleware();
const middleware = [saga];

const store = configureStore({
  reducer: {
    patient,
    user,
  },
  middleware,
});

saga.run(patientSaga);
saga.run(userSaga);

export default store;
