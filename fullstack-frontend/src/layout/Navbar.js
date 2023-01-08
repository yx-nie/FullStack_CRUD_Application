import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FullstackApp</a>
                <Link className="btn btn-outline-light" to="/adduser">Add User</Link>
            </div>
        </nav>
    </div>
  )
}
