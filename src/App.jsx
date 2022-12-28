import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import NoteList from './component/NoteList'
import SearchBar from './component/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const [notes, setNotes] = useState([])

	
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes)
		toast.info("Your note has been deleted from list")
	};
	
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
			)
			toast.success("Local storage is found")

		if (savedNotes) {
			setNotes(savedNotes)
			toast.info("Notes has been loaded")
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		)
	}, [notes])

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		}
		const newNotes = [...notes, newNote]
		setNotes(newNotes);
	}


  return (
    <div className="App px-2">
	  <ToastContainer autoClose={1250} theme="colored" closeOnClick={false} pauseOnHover={false} hideProgressBar={true}/>
      <div className="container">
        <h1 className="text-black font-qs text-4xl font-bold pt-5">Welcome to Note App</h1>
        <SearchBar handleSearchNote={setSearchText}/>
        <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
  )
}

export default App
