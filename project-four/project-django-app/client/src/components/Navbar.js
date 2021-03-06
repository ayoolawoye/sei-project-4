import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/componentStyles/navbar.scss'


const Navbar = () => {


  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" href="https://bulma.io">
          <img src="https://i.imgur.com/Tshg1JT.png" width="150" height="600" alt="logo" />
        </Link>

        {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
      </div>



      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/register" className="button is-primary">
              <strong>Register</strong>
            </Link>
            <Link to="/login" className="button is-light">
              Log in
            </Link>
          </div>
        </div>
      </div>

    </div>



  )
}

export default Navbar

