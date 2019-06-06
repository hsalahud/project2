// Import FirebaseAuth and firebase.
import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import Button from '@material-ui/core/Button'

class Login extends Component {
  render () {
    const { uiConfig, isSignedIn, email, displayName, uid } = this.props
    return (
      <>
        {
          isSignedIn
            ? (
              <Button color='secondary' onClick={() => firebase.auth().signOut()}>Sign Out</Button>
            )
            : (
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            )
        }
      </>
      //     {
      //       isSignedIn ? (<Button color = "secondary" >
      //         Secondary
      //     </Button>
      //       )
      //       : (
      //     <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      //   )
      // }
    )
  }
}

export default Login
