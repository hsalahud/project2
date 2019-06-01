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
import Images from './utils/Images.js'
import randomString from 'randomstring'



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
    displayName: '',
    email: null,
    uid: null,
    dob: new Date(),
    phone_number: null,
    isMale: '',
    interestedIn: null,
    skillInterest: '',
    int1: '',
    int2: '',
    int3: '',
    bio: '',
    formCompleted: null,
    userId: null,
    text: [],
    imageURL: [],
    currentUser: {},
    potentialMatches: []
  }

  ///////////////////////////////////////
  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
    console.log(this.state)
  }
// handles bio input
  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
    console.log(event.target.id)
    console.log(event.target.value)
  }
// handles date of birth
  handleDateChange = event => {
    console.log(event)
    this.setState({ dob: new Date(event._d) })
  }
// handles 'gender' selection
  handleChangeRb = event => {
    console.log(event)
    this.setState({ isMale: event.target.value})
  }
// handles 'interested in' selection
  handleChangeRb2 = event => {
    console.log(event)
    this.setState({ interestedIn: event.target.value })
  }
// handles 'skill interests' selection
  handleChangeSkills = event => {
    console.log(event)
    this.setState({ skillInterest: event.target.value })
  }
// handles 'personal interest 1' selection
  handleInterest1 = event => {
    console.log(event)
    this.setState({ int1: event.target.value })
  }
// handles 'personal interest 2' selection
  handleInterest2 = event => {
    console.log(event)
    this.setState({ int2: event.target.value })
  }
// handles 'personal interest 3' selection
  handleInterest3 = event => {
    console.log(event)
    this.setState({ int3: event.target.value })
  }

  ///////////////////////////////////////

  //THIS FUNCTION STORES THE IMAGE WE UPLOAD INTO THE DATABASE.
  //KU
  storeForm = event => {
    event.preventDefault()

    ////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////
    const file = document.querySelector('#contained-button-file').files[0]
    let newFileName = randomString.generate()
    const newFile = new File([file], newFileName, { type: file.type });

    //Enter variables here


    //process to store newly created file in firebase
    storage.ref(`profileImage/${newFile.name}`).put(newFile)
      .then ( () => {

        ///Kumiko must creat an object for form like this
        //we create an object with the state of our inputs
        let newImage = {
          text: newFileName,
          userId: this.state.userId
        }

        //Here we create a new row in our mysql db and post the image details there
        //Kumiko will use Users.put
        Images.postOne(newImage)
        //As soon as we submit the form, we get the image URL from firebase
        this.retrieveImages(newFileName)

      })
      .catch(e => console.log(e))

      //Enter form data transfer to db here - Kumiko






  }

      ////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////

    //Function to retrieve image URL from firebase
  retrieveImages = image => {
      storage.ref(`profileImage/${image}`).getDownloadURL()
      .then (url => {
        let imageURL = this.state.imageURL
        imageURL.push(url)
        this.setState({ imageURL })
      }).catch (e => console.log(e))
  }

  

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
              this.setState({
                userId: data.id,
                currentUser: data
              })
            } else {
              this.setState({
                userId: data.id,
                currentUser: data
              })
              data.images.forEach(({ text }) => this.retrieveImages(text))
              this.setState({ text: data.images.map(({text}) => text) })
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
    // console.log(this.state)
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    console.log(this.state)
    const { isSignedIn, displayName, email, uid, bio, dob, radioButton1, skillInterest, int1, int2, int3 } = this.state
    return (
      <>
        <Router>
          <div>
            <Route exact path='/' render={() => isSignedIn ? (<Form key='form1' handleInputChange={this.handleInputChange} handleDateChange={this.handleDateChange} handleChangeRb={this.handleChangeRb} handleChangeRb2={this.handleChangeRb2} handleChangeSkills={this.handleChangeSkills} handleInterest1={this.handleInterest1} handleInterest2={this.handleInterest2} handleInterest3={this.handleInterest3} bio={bio} dob={dob} radioButton1={radioButton1} skillInterest={skillInterest} int1={int1} int2={int2} int3={int3} storeForm = {this.storeForm} />)
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





