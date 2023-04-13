import NotesItem from "./NotesItem";
import PropTypes from "prop-types";

const NotesList = ({ notes, onDeleteNote }) => {
  const notesList = notes.map((note) => {
    return <NotesItem key={note.id} note={note} onDeleteNote={onDeleteNote} />;
  });
  return <div className="notes__list">{notesList}</div>;
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteNote: PropTypes.func.isRequired,
};

export default NotesList;
