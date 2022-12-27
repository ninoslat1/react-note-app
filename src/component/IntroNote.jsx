const IntroNote = ({text, date}) => {
  return (
    <div className='rounded-xl p-4 h-[40vh] flex flex-col justify-between whitespace-pre-wrap break-words bg-white text-black'>
        <h1 className="text-xl">{text}</h1>
        <div className='note-footer'>
            <small>{date}</small>
        </div>
    </div>
  )
}

export default IntroNote