import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'



function App() {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/skills')
      console.log(await res.json())

    }
    getData()
  })
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </>



  )
}

export default App
