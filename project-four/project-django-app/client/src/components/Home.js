import React from 'react'
import '../styles/componentStyles/home.scss'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div className="main">
      <div className="section-header section-header-home ">
      </div>

      {/* <section className="hero is-large is-link">
        <div className="hero-body" id="hero-body">
        </div>
      </section> */}

      <div className="hero">
        <div className="hero-content">
          {/* <img className="img-responsive" src="https://i.imgur.com/XmzS9DT.png" alt="logo" /> */}
          <p id="hero-writing">From painting to knitting, no matter how random, there’s someone that can help...</p>
          <Link to="/skills" className="button hero-button">Find a skill</Link>
        </div>
      </div>

      {/* <section className="section">
        Hey
      </section> */}
    </div>
  )
}

export default Home
