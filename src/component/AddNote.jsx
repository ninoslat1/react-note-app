import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddNote({handleAddNote}) {
  const [noteWord, setNoteWord] = useState('')
  const textLimit = 150;
  const handleChange = (event) => {
    if(textLimit - event.target.value.length >= 0){
        setNoteWord(event.target.value)
    }
  }
  const handleSaveClick = () => {
    if(noteWord.trim().length > 0){
        handleAddNote(noteWord)
        setNoteWord("")
        toast.success('Your note has been successfully added to note list')
    }
  }

  return (
    <>
    <div className='note new my-10 md:my-0'>
        <textarea rows='8' cols='10' placeholder='Write your activity' onChange={handleChange} value={noteWord}></textarea>
        <div className='note-footer'>
            <small>{textLimit - noteWord.length}/{textLimit}</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
    <ToastContainer autoClose={1250} theme="colored" closeOnClick={false} pauseOnHover={false} hideProgressBar={true}/>
    </>
  )
}

export default AddNote