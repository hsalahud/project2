import React, { Component } from 'react'
// installed npm i react-router-dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/navbar'
import Login from './components/login'
// import Stats from './components/stats'
// import Profile from './components/profile'
// import Matches from './components/matches'
// import Chat from './components/chat'
import Form from './components/form'
import LogHoursForm from './components/logHoursForm'
import BarExample from './components/stats'
import firebase from 'firebase'
import Users from './utils/Users.js'
import randomString from'randomstring'
import Matches from './components/matches'

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APPID
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

const storage = firebase.storage()


class App extends Component {

  state = {
    isSignedIn: false,
    displayName: null,
    email: null,
    uid: null,
    dob: null,
    phone_number: null,
    isMale: null,
    interestedIn: null,
    skillInterest: null,
    int1: null,
    int2: null,
    int3: null,
    bio: null,
    formCompleted: null,
    userId: null,
    text: []
  }

  //To test --- it works!
  storeImage = event => {
    event.preventDefault()
    const file = document.querySelector('#contained-button-file').files[0]
    let newFileName = randomString.generate()
    const newFile = new File([file], newFileName, {type: file.type});
    console.log(file)
    console.log(newFile)
    storage.ref(`profileImage/${newFile.name}`).put(newFile)
      .catch(e => console.log(e))

     //Create function to store new file name in database
  }

  // retrieveImages = text => {
  //   text.forEach(image, index => {
  //     storage.ref(`profileImages/${image[index]}.jpg` || `profileImages/${image[index]}.png`).getDownloadURL()
  //     .then (url => {
  //       document.querySelector(`#profileImage${index}`).setAttribute('src', url)
  //     })
  //   });
    
  // }

  componentWillMount() {
    let user = {}
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isSignedIn: !!user, displayName: user.displayName, email: user.email, uid: user.uid })

        user = {
          name: this.state.displayName,
          email: this.state.email,
          firebaseId: this.state.uid
        }

        Users.getOne(this.state.uid)
          .then(({ data }) => {
            if (data === null) {
              Users.postOne(user)
              this.state.userId = data.id
            } else {
              this.state.userId = data.id
            }
          }

          )
      } else {
        this.setState({ isSignedIn: !!user, displayName: null, email: null, uid: null, userId: null })
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
                {/* <LogHoursForm/> */}
                {/* <BarExample/> */}
                {/* <Form storeImage = {this.storeImage} /> */}
                <Matches/>
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


