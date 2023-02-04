import { useContext } from "react";
import { NoteContext } from "../contexts/NoteContexts";

const useNote = () => useContext(NoteContext);
export default useNote;
