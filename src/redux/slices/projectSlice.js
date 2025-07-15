import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;

const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api/v1";

const initialState = {
  project: null,
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
    projectFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { projectRequest, projectSuccess, projectFail } =
  projectSlice.actions;
export default projectSlice.reducer;

const handleError = (err) =>
  err.response?.data?.message || err.message || "Something went wrong";

// ==== Thunks ====

export const getAllRepos = () => async (dispatch) => {
  dispatch(projectRequest());
  try {
    const { data } = await axios.get(`${baseURL}/projects/repos`, {
      withCredentials: true,
    });
    dispatch(projectSuccess(data));
  } catch (err) {
    const msg = handleError(err);
    dispatch(projectFail(msg));
    toast.error(msg);
  }
};

export const createProject = (projectData) => async (dispatch) => {
  dispatch(projectRequest());
  try {
    const { data } = await axios.post(
      `${baseURL}/projects/create`,
      projectData,
      {
        withCredentials: true,
      }
    );

    dispatch(projectSuccess(data));
    toast.success("Project created successfully!");
  } catch (err) {
    const msg = handleError(err);
    dispatch(projectFail(msg));
    toast.error(msg);
  }
};

export const getAllLogs = (deploymentId) => async (dispatch) => {
  dispatch(projectRequest());
  try {
    const { data } = await axios.get(`${baseURL}/get-logs`, deploymentId, {
      withCredentials: true,
    });

    dispatch(projectSuccess(data));
  } catch (err) {
    const msg = handleError(err);
    dispatch(projectFail(msg));
  }
};
