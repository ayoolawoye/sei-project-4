import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    first_name: 'user',
    last_name: 'user',
    profile_image: 'image.jpg',
    about_me: 'jpg',
    skills: 'jpg',
  })

  const history = useHistory()

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
    // console.log(formData, setFormData)
  }
  const handleSubmit = async event => {
    event.preventDefault()
    console.log(formData)
    console.log(JSON.stringify(formData, null, 2))

    const response = await axios.post('api/auth/register/', formData)
    console.log(response)
    history.push('/login')
  }

  return (
    <section id="register-color" className="section">
      <div className="container">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username
                <div className="control">
                  <input
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label">Email
                <div className="control">
                  <input
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label">Password
                <div className="control">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label">Password Confirmation
                <div className="control">
                  <input
                    type="password"
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning" id="register-button">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register