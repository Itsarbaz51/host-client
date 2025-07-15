import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api/v1";

const initialState = {
    deployment: null,
    isLoading: false,
    error: null,
};

const deploymentSlice = createSlice({
    name: "deployment",
    initialState,
    reducers: {
        deploymentRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        deploymentSuccess: (state, action) => {
            state.isLoading = false;
            state.deployment = action.payload;
            state.error = null;
        },
        deploymentFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { deploymentRequest, deploymentSuccess, deploymentFail } =
    deploymentSlice.actions;
export default deploymentSlice.reducer;

const handleError = (err) =>
    err.response?.data?.message || err.message || "Something went wrong";


export const getSingleDeployment = (deploymentId) => async (dispatch) => {
    console.log(deploymentId);
    
    dispatch(deploymentRequest());
    try {
        const { data } = await axios.get(`${baseURL}/${deploymentId}`, {
            withCredentials: true,
        });

        dispatch(deploymentSuccess(data));
    } catch (err) {
        const msg = handleError(err);
        dispatch(deploymentFail(msg));
    }
};
