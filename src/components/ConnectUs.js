import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const ConnectUs = (props) => {
  
  const context = useContext(noteContext);
  const {addContact} = context;

  const [con, setCon] = useState({name:"",  email:"",description:""})
    
  const handleSubmit =(e)=> 
  {
    e.preventDefault();

    addContact(con.name,con.email,con.description);
    setCon({name:"",  email:"", description:""})
    props.showAlert("Added Successfully","success");
    
  }
  const onChange=(e)=>{
      setCon({...con, [e.target.name]: e.target.value})
    }

   
    return (
        <div className="container py-4">

        
        <form id="contactForm"> 
      
          
          <div className="mb-3">
            <label className="form-label" htmlFor="name" >Name</label>
            <input className="form-control" value={con.name} name ="name" id="name" type="text" placeholder="Name" onChange={onChange} />
             
          </div>
      
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label" >Email Address</label>
            <input className="form-control" value={con.email} name='email' id="email" type="email" placeholder="Email Address" onChange={onChange} />
          </div>
      
          
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Message</label>
            <textarea className="form-control" value={con.description} id="description" name='description' onChange={onChange} type="text" placeholder="Message" rows="5"></textarea>
          </div>
      
          
          <div className="d-grid">
            <button className="btn btn-primary btn-lg" onClick={handleSubmit} type="submit">Submit</button>
          </div>
      
        </form>
      
      </div>
      
    )
}

export default ConnectUs
