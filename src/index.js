import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import theme from "./store/Theme";

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
