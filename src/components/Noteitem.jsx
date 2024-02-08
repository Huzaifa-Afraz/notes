import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'





export default function Noteitem(props) {
  const { deleteNote} = useContext(NoteContext)
  const { note, updateNote } = props;


  // const updateNotes = (note) => {
    // updateNote(_id);
    // console.log(_id)
    // ref.current.click();
    
   
    // setNotes({title:'helo', descreption:'helo 1', tags:'helo 2'})

    // console.log(note)
    // console.log(notes)
    // updateNote({note})
  // }




  return (
    <>
    


      <div className='col-md-3 '>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.descreption}</p>
            <hr />
            <div className='d-flex gap-3 align-items-center'>
              <i className="icon fa-regular fa-trash-can" onClick={() => {deleteNote(note._id) }}></i>
              <i className="icon fa-regular fa-pen-to-square" onClick={() => updateNote(note)}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
