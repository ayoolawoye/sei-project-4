import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'

const SkillShow = () => {
  // const params = useParams()

  const [skills, setSkills] = useState(null)

  useEffect(() => {
    // make our request for the cheese data
    const getData = async () => {
      const response = await axios.get('/api/skills')
      setSkills(response.data)
    }
    getData()
  }, [])

  if (!skills) return null
  const { description, price, image, user } = skills
  return (
    <section className="section">
      <div className="container">
        <div>
          <h2 className="title has-text-centered">{skills.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={image} alt="" />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4"><span role="img" aria-label="plate">🍽</span> Tasting Notes</h4>
              <p>{description}</p>
              <hr />
              <h4 className="title is-4"><span role="img" aria-label="globe">🌍</span> Origin</h4>
              <hr />
              <p>{price}</p>
              <hr />
              <h4 className="title is-4"><span role="img" aria-label="wave">🖐</span> Added By</h4>
              <hr />
              <p>{user.username}</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillShow