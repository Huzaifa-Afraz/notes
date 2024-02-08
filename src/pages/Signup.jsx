import React ,{useState} from 'react'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom';
export default function Signup() {


  const [EmailPassword, SetEmailPassword]=useState({name:'',email:'', password:''})
  const navigate=useNavigate();
  const SubmitForm=async (e)=>{
    e.preventDefault();
  const responce=await fetch('http://localhost:5000/auth/signup',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({username:EmailPassword.name,email:EmailPassword.email, password:EmailPassword.password})
  });
  const token =await responce.json();
  if(token.success){
    localStorage.setItem('token',token.token)
    navigate('/login')
  }
  else{
    console.log(token.error)
  }
  }
  
  const change=(e)=>{
  SetEmailPassword({...EmailPassword, [e.target.name]:e.target.value})
  
  }



  return (
    <>
    <Navbar/>
    <div className="container">
<form onSubmit={SubmitForm}>
  <div className="mb-3">
    <label htmlFor="Name" className="form-label">Your Name</label>
    <input type="text" className="form-control" id="Name" name='name' onChange={change}/>
  </div>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email" name='email'  onChange={change}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' id="password" onChange={change}/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
</div>
    </>
  )
}
