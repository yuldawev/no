import { Link } from "react-router-dom";
import React from "react";
import { Button, Col, Stack, Container } from "react-bootstrap";
import useNote from "../hooks/useNote";
import NoteCard from "../components/NoteCard";

const NoteListView = () => {
  const { notes } = useNote();

  console.log(notes);

  return (
    <Container className="my-4">
      <Stack direction="horizontal">
        <Col>
          <h1>Note List</h1>
        </Col>
        <Col xs="auto">
          <Link to="/create">
            <Button type="button" variant="primary">
              Create
            </Button>
          </Link>
        </Col>
      </Stack>
      <Stack gap={4} direction="horizontal">
        {notes.map((e) => (
          <Col key={e.uuid} md={3} lg={2} sm={12}>
            <NoteCard note={e} />
          </Col>
        ))}
        <Col></Col>
      </Stack>
    </Container>
  );
};

export default NoteListView;
