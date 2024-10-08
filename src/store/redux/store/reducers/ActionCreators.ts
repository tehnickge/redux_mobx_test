import { AppDispatch } from "../store";
import axios from "axios";
import { IUser, userSlice } from "./UseSlice";
// import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(userSlice.actions.usersFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(userSlice.actions.usersFetchingError(e.message));
  }
};

// export const fetchUsers = createAsyncThunk(
//   "users/fetchAll",
//   async (_, thunkAPI) => {
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     return response.data;
//   }
// );
