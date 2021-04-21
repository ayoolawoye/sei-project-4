import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const history = useHistory()

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await axios.post('http://ga-cheesebored.herokuapp.com/login', formData)
    window.localStorage.setItem('token', response.data.token)
    history.push('/cheeses')
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form onSubmit={handleSubmit} className="box column is-half is-offset-one-quarter">
            <div className="field">
              <label className="label">Email
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label">Password
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">Log Me In!</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
