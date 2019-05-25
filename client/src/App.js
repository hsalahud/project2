import React, { Component } from 'react'
// installed npm i react-router-dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/navbar'
import Stats from './components/stats'
import Profile from './components/profile'
import Matches from './components/matches'
import Chat from './components/chat'

class App extends Component {
  render () {
    return (
      <>
        <Router>
          <div>
            <NavBar />
            <Route path='/stats' component={Stats} />
            <Route path='/profile' component={Profile} />
            <Route path='/matches' component={Matches} />
            <Route path='/chat' component={Chat} />
          </div>
        </Router>
      </>
    )
  }
}

export default App
