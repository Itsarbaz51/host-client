import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.withCredentials = true;

const baseURL = import.meta.env.VITE_BASE_URL;

const initialState = {
    user: [],
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
            toast.success("Logged out successfully!");
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
        console.log(data);
        dispatch(authSuccess(data));
    } catch (err) {
        const msg = handleError(err);
        dispatch(authFail(msg));
        toast.error(msg);
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
        toast.success("Signed up with GitHub!");
    } catch (err) {
        const msg = handleError(err);
        dispatch(authFail(msg));
        toast.error(msg);
        throw err;
    }
};

export const githubLogin = (code) => async (dispatch) => {
    dispatch(authRequest());
    try {
        const { data } = await axios.post(`${baseURL}/auth/login`, { code });
        const token = data.data.token;
        dispatch(authSuccess({ token }));
        toast.success("Logged in with GitHub!");
    } catch (err) {
        const msg = handleError(err);
        dispatch(authFail(msg));
        toast.error(msg);
    }
};

export const logoutUser = () => async (dispatch) => {
    dispatch(authRequest());
    try {
        const { data } = await axios.post(`${baseURL}/auth/logout`, {
            withCredentials: true,
        });
        console.log(data);
        
        dispatch(authSuccess(data));
        toast.success("Logout successfully!");
    } catch (err) {
        const msg = handleError(err);
        dispatch(authFail(msg));
        toast.error(msg);
    }
};