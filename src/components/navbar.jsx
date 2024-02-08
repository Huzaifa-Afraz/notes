import React from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Navbar() {
const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
    }
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/">SaveIt</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">navbar</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="">Home</NavLink>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact us</a>
        </li> */}
      
      </ul>
     {!localStorage.getItem('token')?<div className="d-flex gap-2">
      <Link className='btn btn-primary' to="/login">Login</Link>
      <Link className='btn btn-primary' to="/signup">Sign up</Link>
     </div>:<a className='btn btn-primary' onClick={logout} href="/login">log Out</a>}
    </div>
  </div>
</nav>
  </>
  )
}
