// Import FirebaseAuth and firebase.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import Button from '@material-ui/core/Button'
import { red } from '@material-ui/core/colors'
import logo from '../../white0101.png'


const styles = theme => ({
  appLogo: {
    margin: '0 auto',
    height:'175px',
    width:'120px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    top: '30%',
  },
  background: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    opacity: '0.8'
  },
  StyledFirebaseAuth: {
    position: 'absolute',
    top: '30%',
    transform: 'translateY(-50%)',
    margin: 'auto',
    width: '100%'
  },
  divStyles: {
    height: '100vh',
    position: 'relative'
  },
  logoDiv: {
    display: 'flex'
  }
})


class Login extends Component {
  render () {
    const { uiConfig, isSignedIn, email, displayName, uid, classes } = this.props
    return (
      <div className={classes.background}>
      <div className={classes.logoDiv}>
      <img src={logo} className={classes.appLogo} alt="logo"/>
      </div>
        <div className={classes.divStyles}>
        {
          
          isSignedIn
            ? (
              <Button color='secondary' onClick={() => firebase.auth().signOut()}>Sign Out</Button>
            )
            : (
              <StyledFirebaseAuth className={classes.StyledFirebaseAuth} uiConfig={uiConfig} firebaseAuth={firebase.auth()}  />
            )
        }
      </div>
      </div>
      
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)