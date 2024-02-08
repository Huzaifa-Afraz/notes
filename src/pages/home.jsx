import React, {useContext, useState} from 'react'
import Notes from '../components/Notes'
import Navbar from '../components/navbar'
import NoteContext from '../context/notes/noteContext'




export default function Home() {
  const [note, setNote]=useState({title:'', desc:'', tags:''})
  const context=useContext(NoteContext);

  const {addNote}=context;
  const savenote=(e)=>{
    e.preventDefault();
addNote(note.title, note.desc, note.tags);
  };
  const change=(e)=>{
setNote({...note, [e.target.name]:[e.target.value]})
  }
  return (
    <>
    <Navbar/>
    <div className='container'>
      <form className='my-5'>
    <div className="mb-3">
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" name='title' onChange={change} placeholder="your note title here"/>
</div>
   
<div className="mb-3">
  <label htmlFor="descreption" className="form-label">Your note detail</label>
  <textarea className="form-control" id="descreption" name='desc' onChange={change} rows="3"></textarea>
</div>
<div className="mb-3">
  <label htmlFor="tags" className="form-label">Title</label>
  <input type="text" className="form-control" id="tags" name='tags' onChange={change} placeholder="note tags"/>
</div>
<button className='btn btn-primary px-4' onClick={savenote}>submit</button>
</form>
<Notes/>
    </div>
    </>
  )
}