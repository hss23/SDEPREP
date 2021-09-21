import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'
import QuesList from './Pages/QuesList/QuesList'
import { Signup } from './Pages/Signup/Signup'
import { Contact } from './Pages/Contact/Contact'
import { useAuth } from './Services/firebase'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
// import Navbar from './Components/Navbar/Navbar'
const App = () => {
  const { currentUser } = useAuth();

  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/forgot" exact component={ForgotPassword} />
      {currentUser ? (
        <div>
          {/* <Navbar /> */}
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/questions" exact component={QuesList} />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </BrowserRouter>

  )
}

export default App
