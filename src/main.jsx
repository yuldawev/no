import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {NoteProvider} from  "./contexts/NoteContexts"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NoteProvider>
      <App />
    </NoteProvider>
  </BrowserRouter>
);
