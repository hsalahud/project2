import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import './deleteprofile.css'
import { Link } from 'react-router-dom'
import firebase from 'firebase'


const DeleteProfile = (props) => {
  return (
    <Grid id='container2'>
      <Grid id='formContainer2' container spacing={3} >
        <Grid id='question' item xs={6}>
          <h1 id='message'>
            We are sorry to see you leave.
          </h1>
          <h1 id='message2'>
            Are you sure you want to say goodbye to us?
          </h1>
        </Grid>
        <Grid id='button' item xs={3}>
          <Link exact path='/login' >
            <Button variant='contained' id='confirm' onClick={props.deleteUser}>Confirm</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DeleteProfile
