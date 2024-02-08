import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {




  const url = "http://localhost:5000/";
  const newNote = [];
  const [notes, setNotes] = useState(newNote);




  
  const addNote = async (title, descreption, tags) => {
    await fetch(`${url}api/insert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({
        title: title[0],
        descreption: descreption[0],
        tags: tags[0],
      }),
    });

    // console.log(JSON.stringify({  title, descreption, tags}));
    console.log(
      JSON.stringify({
        title: title[0],
        descreption: descreption[0],
        tags: tags[0],
      })
    );

    // const note= {
    //   "_id": "6564cw43533f888076b171235",
    //   "user": "655f902d2de82a3e1bb71365",
    //   "title": title,
    //   "descreption": desc,
    //   "tags": tags,
    //   "__v": 0
    // }

    // setNotes(notes.concat(note));
  };
  // const editNote=async (id, title, descreption, tags)=>{

  // }
  const deleteNote = async (id) => {
    // console.log(`deleting the note ${id}`);
    const newNotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    setNotes(newNotes);
    await fetch(`${url}api/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
  };


  const updateNotes=async ({_id, title, descreption, tags})=>{
    // console.log(_id)
    // console.log(title)
    const Note_id=_id;
    await fetch(`${url}api/update/${Note_id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body:JSON.stringify({_id, title, descreption, tags})

    })

  }



  const getNotes = async () => {
    const notes = await fetch(`${url}api/all-notes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json = await notes.json();
    // console.log(json.notes)
    json && setNotes(json.notes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, getNotes, updateNotes,alert }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU1ZjkwMmQyZGU4MmEzZTFiYjcxMzY1IiwiaWF0IjoxNzAwOTk0MzExfQ.E9lp1Nd8cgfBdDMYi4Q-uiDok95-JvqD8-Qa8U1bJBk
