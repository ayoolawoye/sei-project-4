import React from 'react'
import { Link } from 'react-router-dom'

const SkillCard = ({ _id, name, image, description }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/skills/${_id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{name}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={`../../assets/${image}`} alt={`${name} Skill`} />
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

export default SkillCard