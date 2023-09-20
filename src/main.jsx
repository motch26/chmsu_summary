import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={responsiveFontSizes(createTheme())}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
