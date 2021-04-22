import React, { useState, useEffect } from 'react'
import axios from 'axios'

import UserCard from './UserCard'

const UserIndex = () => {
  const [profiles, setProfiles] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/users')
      setProfiles(response.data)
    }
    getData()
  }, [])

  return (
    <div className="section">
      Profiles
      <div className="container">
        {profiles &&
          <div className="columns is-multiline">
            {profiles.map(profile => (
              <UserCard key={profile._id} {...profile} />
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default UserIndex