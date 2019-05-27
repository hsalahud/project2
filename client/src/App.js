import React, { Component } from 'react'
// installed npm i react-router-dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/navbar'
import Login from './components/login'
// import Stats from './components/stats'
// import Profile from './components/profile'
// import Matches from './components/matches'
// import Chat from './components/chat'
import LogHoursForm from './components/logHoursForm'
import BarExample from './components/stats'
import firebase from 'firebase'

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyD47dfqP7yK4lTvCTdwVDt_yYDn6tb64Yw',
  authDomain: 'bcdate-db.firebaseapp.com',
  databaseURL: 'https://bcdate-db.firebaseio.com',
  projectId: 'bcdate-db',
  storageBucket: 'bcdate-db.appspot.com',
  messagingSenderId: '510445136926',
  appId: '1:510445136926:web:65b0c34824d71fe2'
}
// Initialize Firebase
firebase.initializeApp(config)
// const db = firebase.firestore()
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
}

class App extends Component {

  state = {
    isSignedIn: false,
    displayName: null,
    email: null,
    uid: null
  }

  // retrieveLoginInfo = _ => {
  //   firebase.auth().onAuthStateChanged(({ email, uid, displayName }) => {
  //     this.setState({ displayName, email, uid })
  //   })
  //   console.log(this.state)
  // }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isSignedIn: !!user, displayName: user.displayName, email: user.email, uid: user.uid })
      } else {
        this.setState({ isSignedIn: !!user, displayName: null, email: null, uid: null })
      }
    })
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    )
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    console.log(this.state)
    const { isSignedIn, displayName, email, uid } = this.state
    return (
      <>
        <Router>
          <div>
          <Route path='/' component={() => isSignedIn ? (
            <>
              <NavBar />
              <Login uiConfig={uiConfig} isSignedIn={isSignedIn} displayName={displayName} email={email} uid={uid} />
              <LogHoursForm/>
              <BarExample/>

            </>
          )
            :
            (<Login uiConfig={uiConfig} isSignedIn={isSignedIn} />)
          } />

          </div>
      </Router>
      </>
    )
  }
}

export default App


