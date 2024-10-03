import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/redux/store/hooks/redux";
import { userSlice } from "../../../store/redux/store/reducers/UseSlice";
import { fetchUsers } from "../../../store/redux/store/reducers/ActionCreators";
import { error } from "console";
const ReduxCounterComponent = () => {
  const { count, users, isLoading, error } = useAppSelector(
    (state) => state.usersReducer
  );
  const { increment, decrement } = userSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <label>{count}</label>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <div>
        {JSON.stringify(users, null, 2)}
        {error && <h1>{error}</h1>}
        {isLoading && <h1>идет загрузка</h1>}
      </div>
    </div>
  );
};

export default ReduxCounterComponent;
