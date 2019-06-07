import React, { useState, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import BioInput from './components/textfield/BioInput'
import DateofBirth from './components/dateofbirth/DateofBirth'
import RadioButtons from './components/radiobuttons/radiobuttons'
import SkillInterests from './components/skillInterests/skillInterests'
import PersonalInterests from './components/personalInterests/personalInterests'
import UploadButton from './components/uploadbutton/uploadbutton'
import { Link } from "react-router-dom";
import PhoneNumber from './components/number/number'
import Grid from '@material-ui/core/Grid'
import './form.css'
import NavBar from '../navbar'

const Form = (props) => {
  return (
    <Grid id='container'>
      <h1 id='greeting'>Welcome {props.displayName}!</h1>
      <Grid id='formContainer' container spacing={3} >
        <Grid id='dateOfBirth' item xs={6}>
          <DateofBirth key='dateOfBirth' handleInputChange={props.handleInputChange} handleDateChange={props.handleDateChange} selectedDate={props.dob} />
        </Grid>
        <Grid id='radioButtons' item xs={12}>
          <RadioButtons key='radioButton1' handleInputChange={props.handleInputChange} handleChangeRb={props.handleChangeRb} handleChangeRb2={props.handleChangeRb2} ValueG={props.isMale} ValueI={props.interestedIn} />
        </Grid>
        <Grid id='skillInterests' item xs={6}>
          <SkillInterests key='skillInterests' handleInputChange={props.handleInputChange} handleChangeSkills={props.handleChangeSkills} skills={props.skillInterest} />
        </Grid>
        <Grid id='phoneNumber' item xs={6}>
          <PhoneNumber key='phoneNumber' handleInputChange={props.handleInputChange} handlePhoneNumber={props.handlePhoneNumber} phoneNumber={props.phoneNumber} />
        </Grid>
        <Grid id='personalInterests' item md={12}>
          <PersonalInterests key='personalInterestCollection' handleInputChange={props.handleInputChange} handleInterest1={props.handleInterest1} handleInterest2={props.handleInterest2} handleInterest3={props.handleInterest3} int1={props.int1} int2={props.int2} int3={props.int3} />
        </Grid>
        <Grid id='bio' item md={12} >
          <BioInput key='bioTextfield1' handleInputChange={props.handleInputChange} userBio={props.userBio} />
        </Grid>
        <div id='form-buttons'>
          <Grid item xs={6}>
            <UploadButton />
          </Grid>
          <Grid item xs={3}>

          {
        props.formCompleted ? (
          <Link to="../profile">
          <Button id='update' variant = 'contained' onClick = {props.updateProfile}>Update</Button>
          </Link>
          
          ) :
          
          (
            <Link to = "../profile">
            <Button variant='contained' id='submit' onClick={props.storeForm}>Submit</Button>
            </Link>
        )

      }
            
          </Grid>
        </div>
      </Grid>
     
    </Grid>
  )

 

}


export default Form
