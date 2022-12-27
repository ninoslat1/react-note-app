import {MdDeleteForever} from 'react-icons/md'

const Note = ({id, text, date, handleDeleteNote}) => {
  return (
    <div className='note'>
        <h1 className="text-xl">{text}</h1>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever size={'1.5em'} onClick={() => handleDeleteNote(id)} className="cursor-pointer"/>
        </div>
    </div>
  )
}

export default Note