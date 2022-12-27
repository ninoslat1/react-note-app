import AddNote from "./AddNote"
import IntroNote from "./IntroNote"
import Note from "./Note"
import ShoutoutNote from "./ShoutoutNote"

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className="note-list">
      <IntroNote text="Welcome to notes app, here you can write your activity or task" date="27/12/2022"/>
      <ShoutoutNote date="27/12/2022"/>
      {notes.map((note) => 
        <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
      )}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NoteList
