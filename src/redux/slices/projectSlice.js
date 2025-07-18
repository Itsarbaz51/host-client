import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;

const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api/v1";

const initialState = {
  project: [],
  projectRepos: [],
  isLoading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    projectRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    projectSuccess: (state, action) => {
      state.isLoading = false;
      state.project = action.payload;
      state.error = null;
    },
    projectReposSuccess: (state, action) => {
      state.isLoading = false;
      state.projectRepos = action.payload;
      state.error = null;
    },
    projectFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { projectRequest, projectSuccess, projectReposSuccess, projectFail } =
  projectSlice.actions;
export default projectSlice.reducer;

const handleError = (err) =>
  err?.response?.data?.message || err?.message || "Something went wrong";

// ==== Thunks ====

export const getAllRepos = () => async (dispatch) => {
  dispatch(projectRequest());
  try {
    const { data } = await axios.get(`${baseURL}/projects/repos`);
    dispatch(projectReposSuccess(data));
  } catch (err) {
    const msg = handleError(err);
    dispatch(projectFail(msg));
    toast.error(msg);
  }
};

export const createProject = (projectData) => async (dispatch) => {
  dispatch(projectRequest());
  try {
    const { data } = await axios.post(`${baseURL}/projects/create`, projectData);
    dispatch(projectSuccess(data));
    // return data;
  } catch (err) {
    const msg = handleError(err);
    dispatch(projectFail(msg));
    toast.error(msg);
    throw err;
  }
};

export const getAllLogs = (deploymentId) => async (dispatch) => {
  dispatch(projectRequest());
  try {
    const { data } = await axios.get(`${baseURL}/get-logs/${deploymentId}`);
    dispatch(projectSuccess(data));
  } catch (err) {
    const msg = handleError(err);
    dispatch(projectFail(msg));
    toast.error(msg);
  }
};

export const getProjectById = (id) => async (dispatch) => {
  dispatch(projectRequest());
  try {
    const { data } = await axios.get(`${baseURL}/projects/get-project/${id}`);
    dispatch(projectSuccess(data));
  } catch (err) {
    const msg = handleError(err);
    dispatch(projectFail(msg));
    toast.error(msg);
  }
};

export const getAllProjects = () => async (dispatch) => {
  dispatch(projectRequest());
  try {
    const { data } = await axios.get(`${baseURL}/projects/get-projects`);
    dispatch(projectSuccess(data || []));
  } catch (err) {
    const msg = handleError(err);
    dispatch(projectFail(msg));
    toast.error(msg);
  }
};
