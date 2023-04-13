import { Clear } from "@mui/icons-material";

const NotesItem = ({ note }) => {
  const { id, content } = note;
  return (
    <div className="notes__item">
      <div className="item__text-wrapper">
        <p>{content}</p>
      </div>
      <button className="notes__btn notes__btn--delete">
        <Clear className="clear-icon" />
      </button>
    </div>
  );
};

export default NotesItem;
