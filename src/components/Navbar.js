import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const handleClick = ()=>{
    localStorage.setItem('token','')
  }
  return (
    <nav className="navbar bg-dark navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MYNOTES</Link>
        {!localStorage.getItem('token')?
          <form className="d-flex" role="search">
            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
          </form>:
          <Link className="btn btn-primary mx-1" to="/login" onClick={handleClick} role="button">Logout</Link>}
      </div>
    </nav>
  )
}

export default Navbar
