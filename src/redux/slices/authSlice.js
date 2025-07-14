import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;

const baseURL = import.meta.env.VITE_BASE_URL;

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    authSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    authFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { authRequest, authSuccess, authFail, logout } = authSlice.actions;
export default authSlice.reducer;

const handleError = (err) =>
  err.response?.data?.message || err.message || "Something went wrong";

// ==== Thunks ====

export const signup = (userData) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const { data } = await axios.post(`${baseURL}/auth/register`, userData, {
      withCredentials: true,
    });
    dispatch(authSuccess(data));
    toast.success("Account created successfully!");
  } catch (err) {
    const msg = handleError(err);
    dispatch(authFail(msg));
    toast.error(msg);
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const { data } = await axios.post(`${baseURL}/auth/login`, userData, {
      withCredentials: true,
    });
    dispatch(authSuccess(data));
    toast.success("Logged in successfully!");
  } catch (err) {
    const msg = handleError(err);
    dispatch(authFail(msg));
    toast.error(msg);
  }
};

export const checkAuth = () => async (dispatch) => {
  dispatch(authRequest());
  try {
    const { data } = await axios.get(`${baseURL}/auth/get-current-user`, {
      withCredentials: true,
    });
    dispatch(authSuccess(data));
  } catch (err) {
    const msg = handleError(err);
    dispatch(authFail(msg));
  }
};
export const githubSignup = (code) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const { data } = await axios.post(
      `${baseURL}/auth/register`,
      { code },
      { withCredentials: true }
    );
    dispatch(authSuccess(data));
    toast.success("GitHub linked successful.");
  } catch (err) {
    const msg = handleError(err);
    dispatch(authFail(msg));
    toast.error(msg);
    throw err;
  }
};

export const githubConnect = (code) => async (dispatch) => {
  dispatch(authRequest());

  try {
    const { data } = await axios.post(
      `${baseURL}/auth/github-connect`,
      { code },
      { withCredentials: true }
    );

    dispatch(logout());
    toast.success("GitHub account connected successfully.");
    return data;
  } catch (err) {
    const msg = handleError(err);
    dispatch(authFail(msg));
    toast.error(msg);
    throw err;
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch(authRequest());
  try {
    const { data } = await axios.post(
      `${baseURL}/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(logout());
    toast.success("Logged out successfully!");
    return data;
  } catch (err) {
    const msg = handleError(err);
    dispatch(authFail(msg));
    toast.error(msg);
    throw err;
  }
};
