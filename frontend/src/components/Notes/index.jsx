import { Autorenew } from "@mui/icons-material";
import NotesList from "./NotesList";
import NotesForm from "./NotesForm";

const Notes = () => {
  return (
    <div className="notes">
      <header className="notes__header">
        <h1>Notes</h1>
        <button className="notes__btn">
          <Autorenew className="autorenew-icon" />
        </button>
      </header>

      <NotesList />
      <NotesForm />
    </div>
  );
};

export default Notes;
