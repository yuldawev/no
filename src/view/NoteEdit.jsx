import {React, useMemo} from "react";
import useNote from "../hooks/useNote";
import { Container, Stack, Col } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import NoteForm from "../components/NoteForm";
import { useParams, useNavigate } from "react-router-dom";


const NoteEditView = () => {
  const { notes, onUpdateNote } = useNote();
  const {noteId} = useParams()
  const navigate = useNavigate()
 

const note  = useMemo( () => {
  const res = notes.filter(n => n.uuid === noteId)
  if (res.length === 1) return res[0]
  return null
}, [notes])

const handleSubmit = (title, text) => {
  onUpdateNote(note.uuid, title, text)
  navigate("..")
}

  return (
    <Container>
      <Stack>
        <Col>
          <h1>
            <BsPencilSquare />
            Edit Note
          </h1>
        </Col>
        <Col>
        <NoteForm 
        onSubmit={handleSubmit}
        initialText={note.text}
        initialTitle={note.title}
        />
        </Col>
      </Stack>
    </Container>
  );
};

export default NoteEditView;
