import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/userSlice";

const Users = () => {
  const { users, user, error } = useSelector(state => ({
    users: state.user.users,
    user: state.user.user,
    error: state.user.error,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return <div>Users: {users.length}</div>;
};

export default Users;
