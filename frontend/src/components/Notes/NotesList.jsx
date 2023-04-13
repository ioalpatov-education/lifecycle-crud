import NotesItem from "./NotesItem";

const NotesList = ({ notes }) => {
  console.log(notes);
  const notesList = notes.map((note) => {
    return <NotesItem key={note.id} note={note} />;
  });
  return <div className="notes__list">{notesList}</div>;
};

export default NotesList;
