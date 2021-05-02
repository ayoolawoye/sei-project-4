import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
// import SkillShow from './components/SkillShow'
import SkillIndex from './components/SkillIndex'
// import SkillShow from './components/SkillShow'
// import Profile from './components/Profile'
// import UserCard from './components/UserCard'
// import Singer from './components/Singer'



function App() {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/skills/')
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

          {/* <Route path='/gallery'>
            <SkillShow />
          </Route> */}

          <Route path='/skills'>
            <SkillIndex />
          </Route>

          {/* <Route path='/profiles'>
            <UserCard />
          </Route>

          <Route path='/profiles'>
            <Singer />
          </Route> */}

        </Switch>
        <Footer />
      </BrowserRouter>
    </>



  )
}

export default App
