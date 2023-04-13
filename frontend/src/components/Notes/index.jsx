import { Autorenew } from "@mui/icons-material";
import NotesList from "./NotesList";
import NotesForm from "./NotesForm";
import axios from "axios";
import { useState, useEffect } from "react";
const Notes = () => {
  const [notes, setNotes] = useState([]);

  const updateNotesList = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URI}/notes`
      );

      setNotes(data);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleUpdate = async () => {
    await updateNotesList();
  };

  const addNote = async (noteToAdd) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URI}/notes`, noteToAdd);
    } catch (err) {
      throw new Error(err);
    } finally {
      await updateNotesList();
    }
  };

  useEffect(() => {
    (async () => {
      await updateNotesList();
    })();
  }, []);

  return (
    <div className="notes">
      <header className="notes__header">
        <h1>Notes</h1>
        <button className="notes__btn" onClick={handleUpdate}>
          <Autorenew className="autorenew-icon" />
        </button>
      </header>

      <NotesList notes={notes} />
      <NotesForm onAddNote={addNote} />
    </div>
  );
};

export default Notes;
