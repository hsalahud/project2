import React, { Component } from 'react'
// installed npm i react-router-dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/navbar'
import Login from './components/login'
// import Stats from './components/stats'
import Profile from './components/profile'
// import Matches from './components/matches'
// import Chat from './components/chat'
import Form from './components/form'
import LogHoursForm from './components/logHours'
import BarData from './components/stats'
import firebase from 'firebase'
import Users from './utils/Users.js'
import Images from './utils/Images.js'
import Timelog from './utils/timelog.js'
import randomString from 'randomstring'
import Deck from './components/Deck'
import DeleteProfile from './components/delete/deleteprofile'
const moment = require('moment')

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
    email: '',
    uid: '',
    dob: new Date(),
    phone_number: '',
    isMale: '',
    interestedIn: 0,
    skillInterest: '',
    int1: '',
    int2: '',
    int3: '',
    bio: '',
    formCompleted: true,
    userId: '',
    text: [],
    imageURL: [],
    currentUser: {},
    potentialMatches: [],
    logHours: [],
    hrsWorked: '',
    timeStamp: new Date(),
    label: [],
    dataHrs: [],
    matches: [],
    matchesBackup: []
  }

  ///////////////////////////////////////
  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
    // console.log(this.state)
  }
  // handles bio input
  handleInputChange = event => {
    console.log(this.state)
    this.setState({ [event.target.id]: event.target.value })
  }
  // handles date of birth
  handleDateChange = event => {
    console.log(this.state)
    this.setState({ dob: new Date(event._d) })
  }
  // handles 'gender' selection
  handleChangeRb = event => {
    console.log(event.target.value)
    this.setState({ isMale: event.target.value})
    this.setState({ isMale: event.target.value })
  }
  // handles 'interested in' selection
  handleChangeRb2 = event => {
    console.log(this.state)
    this.setState({ interestedIn: event.target.value })
  }
  // handles 'skill interests' selection
  handleChangeSkills = event => {
    console.log(this.state)
    this.setState({ ...this.state, skillInterest: event.target.value })
  }
  // handles 'personal interest 1' selection
  handleInterest1 = event => {
    // console.log(this.state)
    this.setState({ int1: event.target.value })
  }
  // handles 'personal interest 2' selection
  handleInterest2 = event => {
    console.log(this.state)
    this.setState({ int2: event.target.value })
  }
  // handles 'personal interest 3' selection
  handleInterest3 = event => {
    console.log(this.state)
    this.setState({ int3: event.target.value })
  }
  // handles 'phone number' input
  handlePhoneNumber = (event) => {
    // console.log(this.state)
    this.setState({ phone_number: event.target.value })
  }

  handleLogDate = event => {

    // console.log(event._d)
    this.setState({ timeStamp: moment(event._d, "llll") })  ///.format("dddd, MMMM Do YYYY")  valueOf gives us unix timestamp
    // this.setState({ timeStamp: new Date(event._d) })
    // console.log(moment(this.state.timeStamp).format("dddd, MMMM Do YYYY"))
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
    if(document.querySelector('#contained-button-file').files[0]
    ) {

    const file = document.querySelector('#contained-button-file').files[0]
    let newFileName = randomString.generate()
    const newFile = new File([file], newFileName, { type: file.type })

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
    }
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
    // console.log(newForm)
    Users.putOne(this.state.userId, newForm)
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

  //Function to retrieve image URL from firebase for MATCHES
  retrieveImagesMatches = image => {
    storage.ref(`profileImage/${image}`).getDownloadURL()
      .then(url => {
        let matchesImageURL = this.state.matchesImageURL
        matchesImageURL.push(url)
        this.setState({ matchesImageURL })
      }).catch(e => console.log(e))
  }
  //Function to retrieve image URL from firebase for MATCHES
  getUrl = (image, cb) => {
    storage.ref(`profileImage/${image}.jpeg`).getDownloadURL()
      .then(url => cb(url)).catch(e => console.log(e))
  }

  submitLogData = _ => {
    let newTimeLog = {
      hrsWorked: parseInt(this.state.hrsWorked),
      timeStamp: moment(this.state.timeStamp),
      userId: this.state.userId
    }

    // console.log('hi')

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
      .then(({ data }) => {

        for (let i = 0; i < data.length; i++) {
          dataHrs.push(data[i].hrsWorked)
        }

        dataHrs = dataHrs.reverse()
        console.log(dataHrs)
        this.setState({ dataHrs, label })


      }).catch(e => console.log(e))

    // console.log(label)
    // console.log(dataHrs)

    this.setState({ dataHrs })

    // console.log(this.state)


  }

  deleteUser = () => {
    Users.deleteOne(this.state.userId)
    Images.deleteOne(this.state.userId)
    Timelog.deleteOne(this.state.userId)
      // this.state.text.forEach(text => {
    //   let ref = storage.ref.child(`profileImage/${text}.jpeg`)

    //   ref.delete()
    //     .then( _ => {
    //         console.log('goodbye')
    //     })
    //       .catch(error => console.log(error))
    //   })

    firebase.auth().signOut()
  


  }
    //   /////////////////////////////////////////////////////
  //This is retrieving user and console logs out all of user info
  retrieveUser = uniqueId => {
    console.log(`Retrieving user ${uniqueId}`);
    Users.getOne(uniqueId)
      //   .then(({data}) => {
      //     this.state.dob = data.dob
      //     this.state['phone_number'] = data.phone_number
      //     this.state.isMale = data.isMale
      //     this.state.interestedIn = data.interestedIn
      //     this.state.skillInterest = data.skillInterest
      //     this.state.int1 = data.int1
      //     this.state.int2 = data.int2
      //     this.state.int3 = data.int3
      //     this.state.bio = data.bio
      //     this.state.formCompleted = data.formCompleted
      // })
      .then(r => {
        this.setState({
          dob: r.data.dob,
          phone_number: r.data.phone_number,
          isMale: r.data.isMale ? '1' : '0',
          interestedIn: r.data.interestedIn ? '1' : '0',
          skillInterest: r.data.skillInterest,
          int1: r.data.int1,
          int2: r.data.int2,
          int3: r.data.int3,
          bio: r.data.bio,
          formCompleted: r.data.formCompleted,
          imgURL: r.data.images
          // userId: r.data.id
        });
      })
      .catch(e => console.log(e));
  };
  ////////////////////////////////////////////////////

  ////////////////JAGA's UPDATE PROFILE FUNCTION//////////////////////////////

  updateProfile = () => {

    let updateUser = {
      dob: this.state.dob,
      isMale: this.state.isMale ? true : false,
      interestedIn: this.state.interestedIn ? true : false,
      skillInterest: this.state.skillInterest,
      int1: this.state.int1,
      int2: this.state.int2,
      int3: this.state.int3,
      bio: this.state.bio,
    }

    Users.putOne (this.state.userId, updateUser)
      .then (console.log('Successfully updated user'))
      .catch(e => console.log(e))

    if (document.querySelector("#contained-button-file").files[0]) {
      console.log('heyyyyy')
    const file = document.querySelector("#contained-button-file").files[0];
    let newFileName = randomString.generate();
    const newFile = new File([file], newFileName, { type: file.type });

    //Enter variables here

    //process to store newly created file in firebase
    storage
      .ref(`profileImage/${newFile.name}`)
      .put(newFile)
      .then(() => {
        //we create an object with the state of our inputs
        let newImage = {
          text: newFileName,
          userId: this.state.userId
        };

        //Here we create a new row in our mysql db and post the image details there
        
        Images.postOne(newImage);
        //As soon as we submit the form, we get the image URL from firebase
        this.retrieveImages(newFileName);
      })
      .catch(e => console.log(e));

    }

  }


  ///////////////////END OF JAGA's UPDATE PROFILE FUNCTION/////////////////////
 

  

  componentWillMount() {
    console.log('HEEEEEEEELP')
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
              Users.getOne(this.state.uid)
                .then(({data}) => {
                  this.setState({
                    userId: data.id,
                    currentUser: data    
                })
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
    this.retrieveUser(this.state.uid);
    console.log(this.state);
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    )
    if (this.state.formCompleted) {

      Users.getInterestedIn(0)
        .then(({ data }) => {
          console.log('hi')
          let matches = data.map(person => {
            person.images.forEach((image, i) => this.getUrl(image.text, img => person.images[i] = img))
            return person

          })
          this.setState({ matches })
          // this.setState({matches: data})
          // console.log(this.state.matches)
          // this.state.matches.forEach(({images}) => {
          //   images.forEach(({text}) => {
          //     this.retrieveImagesMatches(`${text}.jpeg` )
          //   })

          // })
          // console.log(this.state.matchesImageURL)
        }).catch(e => console.error(e))
    }
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    console.log(this.state)
    const { isSignedIn, displayName, email, uid, bio, dob, radioButton1, skillInterest, int1, int2, int3, phone_number, hrsWorked, timeStamp, imageURL, formCompleted, matches, dataHrs, label } = this.state
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
                  storeForm={this.storeForm} 
                  displayName = {displayName} />
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
              <Deck data={matches} />
              {/* <NavBar /> */}
            </>
          ) :
            (<Login uiConfig={uiConfig} isSignedIn={isSignedIn} />)
          } />

          <Route
              exact
              path="/profile"
              render={() =>
                isSignedIn  && formCompleted ?(
                  <>
                    {/* <Form key='form1' handleInputChange={this.handleInputChange} handleDateChange={this.handleDateChange} handleChangeRb={this.handleChangeRb} handleChangeRb2={this.handleChangeRb2} handleChangeSkills={this.handleChangeSkills} handleInterest1={this.handleInterest1} handleInterest2={this.handleInterest2} handleInterest3={this.handleInterest3} bio={bio} dob={dob} radioButton1={radioButton1} skillInterest={skillInterest} int1={int1} int2={int2} int3={int3} storeForm = {this.storeForm} /> */}
                    <Profile
                      uid={uid}
                      displayName={displayName}
                      dob={dob}
                      skillInterest={skillInterest}
                      int1={int1}
                      int2={int2}
                      int3={int3}
                      bio={bio}
                      imageURL = {imageURL}
                      updateProfile = {this.updateProfile}
                    />
                    <NavBar key = 'navbarFormToProfile'/>
                  </>
                ) : (
                  <Login uiConfig={uiConfig} isSignedIn={isSignedIn} />
                )
              }
              />

<Route
            exact
            path="/form"
            render={() =>
              isSignedIn ? (
                <>
                  <Form
                    key="form1"
                    handleInputChange={this.handleInputChange}
                    handleDateChange={this.handleDateChange}
                    handleChangeRb={this.handleChangeRb}
                    handleChangeRb2={this.handleChangeRb2}
                    handleChangeSkills={this.handleChangeSkills}
                    handleInterest1={this.handleInterest1}
                    handleInterest2={this.handleInterest2}
                    handleInterest3={this.handleInterest3}
                    bio={bio}
                    dob={dob}
                    radioButton1={radioButton1}
                    skillInterest={skillInterest}
                    int1={int1}
                    int2={int2}
                    int3={int3}
                    storeForm={this.storeForm}
                    formCompleted = {formCompleted}
                    updateProfile = {this.updateProfile}
                  />
                </>
              ) : (
                <>
                  <Login uiConfig={uiConfig} isSignedIn={isSignedIn} />
                </>
              )
            }/>
          {/* <Route exact path='/loghours' render={() => isSignedIn ? (
            <>
              <BarData dataHrs={dataHrs}  label={label}/>
              <NavBar />
            </>
          ) :
            (<Login uiConfig={uiConfig} isSignedIn={isSignedIn} />)
          } /> */}

          <Route exact path='/deleteprofile' render={() => isSignedIn ? (
            <>
              <DeleteProfile deleteUser={this.deleteUser} />
            </>
          ) :
            (<Login uiConfig={uiConfig} isSignedIn={isSignedIn} />)
          } />

<Route exact path='/login' render={() => 
            (<Login uiConfig={uiConfig} isSignedIn={isSignedIn} />)
          } />

        </Router>
      </>
    )
  }
}

export default App