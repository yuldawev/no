import { Link } from "react-router-dom";

const NoteCard = ({ note }) => {
  return (
    <Link to={`/${note.uuid}`} className="text-decoration-none overflow-hidden p-2" md={3} lg={2} sm={2}>
      <div className="notecard">
        <h4>{note.title}</h4>
        <p>{note.text}</p>
      </div>
    </Link>
  );
};

export default NoteCard;
