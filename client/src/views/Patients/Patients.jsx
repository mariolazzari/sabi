import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "../../redux/patientSlice";

const Patients = () => {
  const { patients } = useSelector(state => ({
    patients: state.patient.patients,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);

  return <div>Patients: {patients.length}</div>;
};

export default Patients;
