import React, {useContext, useEffect, useRef, useState} from 'react'
import NoteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';
import { useNavigate } from 'react-router-dom';
export default function Notes() {
  const [note, setNotes]=useState({_id:'', etitle:'', edescreption:'', etags:''})
    const Notes=useContext(NoteContext)
    let navigate=useNavigate();
  // eslint-disable-next-line
  const {notes, getNotes,updateNotes}=Notes;
  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/')
    getNotes();}
    else{
      navigate('/login')
    }
    // eslint-disable-next-line
  },[])


  const ref = useRef('')

  const updateNote=(note)=>{
    
    ref.current.click();
    setNotes({_id:note._id, etitle:note.title, edescreption:note.descreption, etags:note.tags})
   
  }




  const savenote=(e)=>{
    ref.current.click();
// addNote(note.title, note.desc, note.tags);
// setNote(e)
// console.log(note._id)
// console.log(note.etitle[0])
updateNotes({_id:note._id, title:note.etitle[0], descreption:note.edescreption, tags:note.etags});

  };
  const change=(e)=>{
    // console.log(notes)
setNotes({...note, [e.target.name]:[e.target.value]})

  }
  return (
    <>
  <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update Notes</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='my-5'>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="title" value={note.etitle} name='etitle' onChange={change} placeholder="your note title here" />
                </div>

                <div className="mb-3">
                  <label htmlFor="descreption" className="form-label">Your note detail</label>
                  <textarea className="form-control" id="descreption" value={note.edescreption} name='edescreption' onChange={change} rows="3"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="tags" className="form-label">Title</label>
                  <input type="text" className="form-control" id="tags" value={note.etags} name='etags' onChange={change} placeholder="note tags" />
                </div>
                {/* <button className='btn btn-primary px-4' onClick={savenote}>submit</button> */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={(e)=>savenote(e)}>Save changes</button>
            </div>
          </div>
        </div>
      </div>




    <div className='row '>
        
        <h2>helo</h2>
      {notes && notes.map((note)=>{
return <Noteitem note={note} updateNote={updateNote} key={note._id}/>;
      })}
    </div>
    </>
  )
}
