import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import router from "./route";
import { ThemeProvider } from "./providers/theme-provider";
import { store } from "./redux/store";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
