import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../globals/status/statuses";
import api from "../src/services/api";
const authSlice = createSlice({
  name: "auth", //Slice  ko name
  initialState: {
    //state ho yo
    user: null,
    token: null,
    status: null,
  },
  reducers: {
    //yo vane ko hamro reducer which acts as helping hand
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setUser, setStatus, setToken } = authSlice.actions;
export default authSlice.reducer;

//in this way we call the api inside reduxtoolkit, for this create one function and inside that function it return another function which is async in nature
export function register(data) {
  return async function registerThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));

    try {
      const response = await api.post("register", data);
      if (response.status === 201) {
        dispatch(setUser(data));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function login(data) {
  return async function login(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await api.post(
        "login",
        data
      );
      if (response.status === 200) {
        dispatch(setToken(response?.data.token));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
