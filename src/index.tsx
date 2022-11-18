import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(

    <BrowserRouter>
        <React.StrictMode>
            <Main/>
        </React.StrictMode>
    </BrowserRouter>,

);

