import React from 'react'
import '../styles/componentStyles/home.scss'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div className="main">
      <div className="section-header section-header-home ">
      </div>

      <section className="hero is-large is-link">
        <div className="hero-body" id="hero-body">
        </div>
      </section>
      <section className="section">
        <ul className="grid">
          <li className="grid-item box hover-box">
            <Link to="/doodle-new" className="homepage page-doodle">
              <p className="homepage-title shadow">Doodle</p>
            </Link>
          </li>
          <li className="grid-item box hover-box">
            <Link to="/gallery" className="homepage page-gallery">
              <p className="homepage-title shadow">Gallery</p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Home
