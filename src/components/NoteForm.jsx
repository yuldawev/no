import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Form, Stack, Col, Button } from "react-bootstrap";

const NoteForm = ({ onSubmit, initialTitle = "", initialText = "" }) => {
  const [title, setTitle] = useState(initialTitle);
  const [text, setText] = useState(initialText);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, text);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
          className="mb-3"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Text</Form.Label>
        <Form.Control
          as="textarea"
          value={text}
          rows={10}
          placeholder="Text..."
          onChange={(e) => setText(e.target.value)}
          className="mb-3"
        />
      </Form.Group>
      <Stack direction="horizontal" className="justify-content-end gap-3">
        <Col xs="auto">
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Col>
        <Col xs="auto">
          <Link to="..">
            <Button variant="light" type="button">
              Cancel
            </Button>
          </Link>
        </Col>
      </Stack>
    </Form>
  );
};

export default NoteForm;
