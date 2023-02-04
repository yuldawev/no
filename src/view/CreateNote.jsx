import React, { useState } from "react";
import { Col, Stack, Container, Button, Form } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import useNote from "../hooks/useNote";
import { Link, useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";

const CreateNoteView = () => {
  const { onCreateNote } = useNote();
  const navigate = useNavigate();

  const handleSubmit = (title, text) => {
    onCreateNote(title, text)
    navigate("..")
  } 

  return (
    <Container className="my-4">
      <Stack>
        <Col>
          <h1>
            <BsPencilSquare /> Creating notes
          </h1>
        </Col>
        <Col>
         <NoteForm onSubmit={handleSubmit}/>
        </Col>
      </Stack>
    </Container>
  );
};

export default CreateNoteView;
