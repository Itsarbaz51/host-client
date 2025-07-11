import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./index.css";
import AuthLoader from "./AuthLoader";
import { ToastContainer } from "react-toastify";

const container = document.getElementById("root");

createRoot(container).render(
  <Provider store={store}>
    <>
      <AuthLoader />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  </Provider>
);
