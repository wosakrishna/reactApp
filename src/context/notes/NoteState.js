import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  

//get all notes
const getNotes = async() => {
  // TODO: API Call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiYzFiNjA4M2E4MjhmZWFmMTdjYWJhIn0sImlhdCI6MTYzOTcxNzcyOH0.mzpJwRtI-d8QdLdKDDxPuRV7pMLzp0kVPgLnyGgxvys'
    },
    
  });
  
const json =await response.json()
  console.log(json)
  setNotes(json)
}

  // Add a Note
  const addNote = async(title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiYzFiNjA4M2E4MjhmZWFmMTdjYWJhIn0sImlhdCI6MTYzOTcxNzcyOH0.mzpJwRtI-d8QdLdKDDxPuRV7pMLzp0kVPgLnyGgxvys'
      },
      body: JSON.stringify({title,description,tag})
    });
    const note = await response.json();
    setNotes(notes.concat(note))


 
    
  }

  // Delete a Note
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiYzFiNjA4M2E4MjhmZWFmMTdjYWJhIn0sImlhdCI6MTYzOTcxNzcyOH0.mzpJwRtI-d8QdLdKDDxPuRV7pMLzp0kVPgLnyGgxvys'
      }
    });
      const json = await response.json();
      console.log(json)
     
    console.log("delete the note" + id);
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote)
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
        
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiYzFiNjA4M2E4MjhmZWFmMTdjYWJhIn0sImlhdCI6MTYzOTcxNzcyOH0.mzpJwRtI-d8QdLdKDDxPuRV7pMLzp0kVPgLnyGgxvys'
      },
      body: JSON.stringify({title,description,tag})
    });
    const json = await response.json();
    console.log(json)

    const newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
   

    }
    setNotes(newNotes);

  }

  const addContact = async(name,email,description) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/contact/contact`, 
    {
      method: 'POST',  
      headers: 
      {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name,email,description})
    });
    const json= await response.json()
    console.log(json)


  
  

   
  
  }

  const upload = async(data) => {
    const response = await fetch(`http://localhost:5000/api/upload/upload`, 
    {
      method: 'POST',  
   
     
      body: (data)
    });
    const json= await response.json()
    console.log(json)
    
    
    


 
    
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes,addContact,upload }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;