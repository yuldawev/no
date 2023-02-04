import { React, useMemo  } from "react";
import useNote from "../hooks/useNote";
import { Container, Stack, Col, Button } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";


const NoteView = () => {
  const { noteId } = useParams();
  const { notes, onDeleteNote } = useNote();
  const navigate = useNavigate();

  const note = useMemo(() => {
    return notes.filter((e) => e.uuid === noteId)[0];
  }, [noteId]);

  const deleteNote = () => {
    onDeleteNote(note.uuid)
    navigate ("..")
  };
  return (
    <Container className="py-4">
      <Stack direction="horizontal">
        <Col>
          <h3>{note.title}</h3>
        </Col>
        <Col xs="auto">
          <Link to="edit" className="me-2">
            <Button className="me-2" type="button" variant="primary">
              Edit
            </Button>
          </Link>
          <Button
            type="button"
            onClick={deleteNote}
            className="me-2"
            variant="outline-danger"
          >
            Delete
          </Button>
          <Link to=".." className="me-2">
            <Button type="button" variant="outline-secondary">
              Go Back
            </Button>
          </Link>
        </Col>
      </Stack>
    </Container>
  );
};

export default NoteView;
