import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import React from "react";
import { v4 as uuid } from "uuid";

export const NoteContext = createContext(null);

const { Provider } = NoteContext;

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useLocalStorage("NOTES", []);

  const onCreateNote = (title, text) => {
    setNotes((prev) => {
      return [...prev, { uuid: uuid(), title, text }];
    });
  };

  const onUpdateNote = (uuid, title, text) => {
    setNotes((prev) => {
      const newNotes = prev.map((note) => {
        if (note.uuid === uuid) {
          note.title = title;
          note.text = text;
        }
        return note;
      });
      return newNotes;
    });
  };

  const onDeleteNote = (uuid) => {
    setNotes((prev) => {
      return prev.filter((note) => note.uuid !== uuid);
    });
  };

  return (
    <Provider value={{ notes, onUpdateNote, onCreateNote, onDeleteNote }}>
      {children}
    </Provider>
  );
};
