import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ _id, firstName, image, description }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/skills/${_id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{firstName}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={`../../assets/${image}`} alt={`${firstName} Skill`} />
            </figure>
          </div>
          <div className="card-content">
            <h5>{description}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default UserCard