import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SkillCard from './SkillCard'

const SkillIndex = () => {
  const [skills, setSkills] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/skills')
      setSkills(response.data)
    }
    getData()
  }, [])

  return (
    <div className="section">
      <hi>Skills</hi>
      <div className="container">
        {skills &&
          <div className="columns is-multiline">
            {skills.map(skill => (
              <SkillCard key={skill._id} {...skill} />
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default SkillIndex