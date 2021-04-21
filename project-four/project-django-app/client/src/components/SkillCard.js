import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

const SkillCard = (owner, description, price) => {
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
  return (
    <>
      <h2>{owner}</h2>
      <h2>{description}</h2>
      <h2>{price}</h2>
    </>

  )
}

export default SkillCard