import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import store from "./redux/store";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import router from "./route";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
