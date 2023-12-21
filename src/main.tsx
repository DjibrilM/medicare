import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./satoshi.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </RecoilRoot>
);
