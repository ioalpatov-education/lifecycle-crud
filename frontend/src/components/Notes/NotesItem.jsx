import { Clear } from "@mui/icons-material";
import PropTypes from "prop-types";

const NotesItem = ({ note, onDeleteNote }) => {
  const { id, content } = note;

  const deleteNote = async () => {
    await onDeleteNote(id);
  };

  return (
    <div className="notes__item">
      <div className="item__text-wrapper">
        <p>{content}</p>
      </div>
      <button className="notes__btn notes__btn--delete" onClick={deleteNote}>
        <Clear className="clear-icon" />
      </button>
    </div>
  );
};

NotesItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default NotesItem;
