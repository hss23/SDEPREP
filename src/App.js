import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'
import QuesList from './Pages/QuesList'
import {Signup} from './Pages/Signup/Signup'
import { Contact } from './Pages/Contact/Contact'
// import Navbar from './Components/Navbar'
const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/about" exact component={About} />
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Signup} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/questions" exact component={QuesList} />
    </BrowserRouter>
  )
}

export default App
