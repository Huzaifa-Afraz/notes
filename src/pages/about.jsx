import React, { useContext } from 'react'
import NavBar from '../components/navbar'
import NoteContext from '../context/notes/noteContext'
export default function About() {
  const p= useContext(NoteContext)
    // eslint-disable-next-line
  const {notes, setNotes}=p;
  return (
    <>
    <NavBar/>
    <div className='container'>
        
      helo from about {notes.map((note)=>{return (
        <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
      )})}
    </div>
    </>
  )
}
