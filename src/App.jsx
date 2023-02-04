import React from "react";
import { Route, Routes } from "react-router-dom";
import NoteEditView from "../src/view/NoteEdit";
import NoteView from "../src/view/Note";
import NoteListView from "../src/view/NoteList";
import CreateNoteView from "../src/view/CreateNote";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.scss";

const App = () => {
  return (
    <Routes>
      <Route index element={<NoteListView />} />
      <Route path="create" element={<CreateNoteView />} />
      <Route path="/:noteId">
        <Route index element={<NoteView />} />
        <Route path="edit" element={<NoteEditView />} />
      </Route>
    </Routes>
  );
};

export default App;
