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
import LogHoursForm from './components/logHours'
import BarExample from './components/stats'
import firebase from 'firebase'
import Users from './utils/Users.js'
import Images from './utils/Images.js'
import Timelog from './utils/timelog.js'
import randomString from 'randomstring'
<<<<<<< HEAD
import './App.css'
=======
import Deck from './components/Deck'
const moment = require('moment')

>>>>>>> master

const moment = require ('moment')

// Configure Firebase.
// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyD47dfqP7yK4lTvCTdwVDt_yYDn6tb64Yw",
  authDomain: "bcdate-db.firebaseapp.com",
  databaseURL: "https://bcdate-db.firebaseio.com",
  projectId: "bcdate-db",
  storageBucket: "bcdate-db.appspot.com",
  messagingSenderId: "510445136926",
  appId: "1:510445136926:web:65b0c34824d71fe2"
})
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
    phone_number: '',
    isMale: '',
    interestedIn: null,
    skillInterest: '',
    int1: '',
    int2: '',
    int3: '',
    bio: '',
    formCompleted: false,
    userId: null,
    text: [],
    imageURL: [],
    currentUser: {},
    potentialMatches: [],
    logHours: [],
    hrsWorked: '',
    timeStamp: new Date(),
    label: [],
    dataHrs: []
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
<<<<<<< HEAD
    console.log(event._d)
=======
>>>>>>> master
    this.setState({ dob: new Date(event._d) })
  }
  // handles 'gender' selection
  handleChangeRb = event => {
<<<<<<< HEAD
    console.log(event.target.value)
    this.setState({ isMale: event.target.value})
=======
    this.setState({ isMale: event.target.value })
>>>>>>> master
  }
  // handles 'interested in' selection
  handleChangeRb2 = event => {
<<<<<<< HEAD
    console.log(event.target.value)
=======
>>>>>>> master
    this.setState({ interestedIn: event.target.value })
  }
  // handles 'skill interests' selection
  handleChangeSkills = event => {
<<<<<<< HEAD
    console.log(event.target.value)
=======
>>>>>>> master
    this.setState({ skillInterest: event.target.value })
  }
  // handles 'personal interest 1' selection
  handleInterest1 = event => {
    console.log(event.target.value)
    this.setState({ int1: event.target.value })
  }
  // handles 'personal interest 2' selection
  handleInterest2 = event => {
<<<<<<< HEAD
    console.log(event.target.value)
=======
>>>>>>> master
    this.setState({ int2: event.target.value })
  }
  // handles 'personal interest 3' selection
  handleInterest3 = event => {
<<<<<<< HEAD
    console.log(event.target.value)
=======
>>>>>>> master
    this.setState({ int3: event.target.value })
  }
  // handles 'phone number' input
  handlePhoneNumber = (event) => {
    console.log(event.target.value)
    this.setState({ phone_number: event.target.value })
  }

  handleLogDate = event => {

    console.log(event._d)
    this.setState({ timeStamp: moment(event._d, "llll") })  ///.format("dddd, MMMM Do YYYY")  valueOf gives us unix timestamp
    // this.setState({ timeStamp: new Date(event._d) })
    console.log(moment(this.state.timeStamp).format("dddd, MMMM Do YYYY"))
  }

  // handleLogHour = event => {
  //   this.setState({ inputtedHour: event.target.value })
  //   console.log(this.state.inputtedHour)
  // }

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

    //process to store newly created file in firebase
    storage.ref(`profileImage/${newFile.name}`).put(newFile)
      .then(() => {

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

<<<<<<< HEAD
      //Enter form data transfer to db here - Kumiko
      let newForm = {
        bio: this.state.bio,
        dob: this.state.dob,
        isMale: this.state.isMale,
        interestedIn: this.state.interestedIn,
        skillInterest: this.state.skillInterest,
        int1: this.state.int1,
        int2: this.state.int2,
        int3: this.state.int3,
        phone_number: this.state.phone_number,
        formCompleted: this.state.formCompleted
      }
      console.log(newForm)
      Users.putOne(this.state.userId, newForm)
=======
    //Enter form data transfer to db here - Kumiko
    let newForm = {
      bio: this.state.bio,
      dob: this.state.dob,
      isMale: this.state.isMale,
      interestedIn: this.state.interestedIn,
      skillInterest: this.state.skillInterest,
      int1: this.state.int1,
      int2: this.state.int2,
      int3: this.state.int3,
      formCompleted: this.state.formCompleted
    }
    console.log(newForm)
    Users.putOne(this.state.userId, newForm)
>>>>>>> master
      .then(console.log('Successfully updated form'))
      .catch(e => console.log(e))
  }


  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  //Function to retrieve image URL from firebase
  retrieveImages = image => {
    storage.ref(`profileImage/${image}`).getDownloadURL()
      .then(url => {
        let imageURL = this.state.imageURL
        imageURL.push(url)
        this.setState({ imageURL })
      }).catch(e => console.log(e))
  }

  submitLogData = _ => {
    let newTimeLog = {
      hrsWorked: parseInt(this.state.hrsWorked),
      timeStamp: moment(this.state.timeStamp),
      userId: this.state.userId
    }

    console.log('hi')

    Timelog.postOne(newTimeLog)

  }

  graphParameters = _ => {
    let label = []
    let dataHrs = []
    for (let i = 0; i < 7; i++) {
      label.push(moment().subtract(i, 'd').format('ddd'))
    }
    label = label.reverse()

    Timelog.getAll('31')
      .then(user => {


        console.log(user)
        //  this.setState({dataHrs: this.state.dataHrs.push(hrsWorked)})


      }).catch(e => console.log(e))

    // console.log(label)
    // console.log(dataHrs)

    this.setState({ dataHrs })

    // console.log(this.state)


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
                currentUser: data,
                formCompleted: data.formCompleted
              })

              if (this.state.formCompleted) {
                data.images.forEach(({ text }) => this.retrieveImages(text))
                this.setState({ text: data.images.map(({ text }) => text) })
              }
            }
          }

          )
      } else {
        this.setState({ isSignedIn: !!user, displayName: null, email: null, uid: null, userId: null })
      }
    })

    // this.graphParameters()
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
    // console.log(this.state)
    const { isSignedIn, displayName, email, uid, bio, dob, radioButton1, skillInterest, int1, int2, int3, phone_number, hrsWorked, timeStamp} = this.state
    return (
      <>
        <Router>
          <div>
            <Route exact path='/' render={() => isSignedIn ? (
              <div id='form'>
                <Form 
                  key='form1' 
                  handleInputChange={this.handleInputChange} 
                  handleDateChange={this.handleDateChange} 
                  handleChangeRb={this.handleChangeRb}
                  handleChangeRb2={this.handleChangeRb2}
                  handleChangeSkills={this.handleChangeSkills}
                  handleInterest1={this.handleInterest1} 
                  handleInterest2={this.handleInterest2}
                  handleInterest3={this.handleInterest3}
                  handlePhoneNumber={this.handlePhoneNumber}
                  phoneNumber={phone_number}
                  bio={bio}
                  dob={dob}
                  radioButton1={radioButton1}
                  skillInterest={skillInterest} 
                  int1={int1} int2={int2} int3={int3} 
                  storeForm={this.storeForm} /> 
            <NavBar />
            </div>
            )
              :
              (<Login uiConfig={uiConfig} isSignedIn={isSignedIn} />)
            } />
          </div>
          <Route exact path='/logHours' render={() => isSignedIn ? (
            <>
              <LogHoursForm key='logHoursForm' submitLogData={this.submitLogData} handleInputChange={this.handleInputChange} handleLogDate={this.handleLogDate} handleLogHour={this.handleLogHour} hrsWorked={hrsWorked} timeStamp={timeStamp} />
            </>
          ) :
            (<Login uiConfig={uiConfig} isSignedIn={isSignedIn} />)
          } />

          <Route exact path='/deck' render={() => isSignedIn ? (
            <>
              <Deck/>
              {/* <NavBar /> */}
            </>
          ) :
            (<Login uiConfig={uiConfig} isSignedIn={isSignedIn} />)
          } />



        </Router>
      </>
    )
  }
}

export default App





