import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice.js";
import projectReducer from "../redux/slices/projectSlice.js";
import deploymentReducer from "./slices/deploymentSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer,
        deployment: deploymentReducer,
    },
});