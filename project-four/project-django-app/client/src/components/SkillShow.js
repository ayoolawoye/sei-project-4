import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SkillShow = () => {
  const params = useParams()

  const [skill, setSkill] = useState(null)

  useEffect(() => {

    const getData = async () => {
      const response = await axios.get(`/api/skills/${params._id}`)
      setSkill(response.data)
    }
    getData()
  }, [])

  if (!skill) return null
  const { description, price, image, user } = skill
  return (
    <section className="section">
      <div className="container">
        <div>
          <h2 className="title has-text-centered">{skill.user}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={image} alt="" />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4"><span role="img" aria-label="plate">G</span> description</h4>
              <p>{description}</p>
              <hr />
              <h4 className="title is-4"><span role="img" aria-label="globe">G</span> price</h4>
              <hr />
              <p>{price}</p>
              <hr />
              <h4 className="title is-4"><span role="img" aria-label="wave">G</span> Added By</h4>
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