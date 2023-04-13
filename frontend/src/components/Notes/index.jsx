import { Autorenew } from "@mui/icons-material";
import NotesList from "./NotesList";
import NotesForm from "./NotesForm";
import axios from "axios";

const Notes = () => {
  const addNote = async (noteToAdd) => {
    console.log("request");
    try {
      await axios.post(`${process.env.REACT_APP_API_URI}/notes`, noteToAdd);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="notes">
      <header className="notes__header">
        <h1>Notes</h1>
        <button className="notes__btn">
          <Autorenew className="autorenew-icon" />
        </button>
      </header>

      <NotesList />
      <NotesForm onAddNote={addNote} />
    </div>
  );
};

export default Notes;
