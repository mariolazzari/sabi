import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patients: [],
  patient: null,
  lodaing: false,
  error: "",
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    getPatients: state => {
      state.patients = [];
      state.patient = null;
      state.lodaing = true;
      state.error = "";
    },
    getPatientsSuccess: (state, action) => {
      state.patients = action.payload;
      state.lodaing = false;
    },
    getPatientsError: (state, action) => {
      state.error = action.payload;
      state.lodaing = false;
    },
  },
});

export const { getPatients, getPatientsSuccess, getPatientsError } =
  patientSlice.actions;

export default patientSlice.reducer;
