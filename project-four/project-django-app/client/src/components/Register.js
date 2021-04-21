import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  const handleSubmit = async event => {
    event.preventDefault()
    const response = await axios.post('api/auth/register/', formData)
    console.log(response)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter box" onSubmit={handleSubmit}>
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
                    name="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">Register Me!</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register