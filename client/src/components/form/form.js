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

const Form = (props) => {
  return (
    <>
      <BioInput key='bioTextfield1' handleInputChange={props.handleInputChange} userBio={props.bio} />
      <DateofBirth key='dateOfBirth' handleInputChange={props.handleInputChange} handleDateChange={props.handleDateChange} selectedDate={props.dob} />
      <RadioButtons key='radioButton1' handleInputChange={props.handleInputChange} handleChangeRb={props.handleChangeRb} handleChangeRb2={props.handleChangeRb2} ValueG={props.isMale} ValueI={props.interestedIn} />
      <SkillInterests key='skillInterests' handleInputChange={props.handleInputChange} handleChangeSkills={props.handleChangeSkills} Skills={props.skillInterest} />
      <PersonalInterests key='personalInterestCollection' handleInputChange={props.handleInputChange} handleInterest1={props.handleInterest1} handleInterest2={props.handleInterest2} handleInterest3={props.handleInterest3} int1={props.int1} int2={props.int2} int3={props.int3} />
      <PhoneNumber key='phoneNumber' handleInputChange={props.handleInputChange} handlePhoneNumber={props.handlePhoneNumber} phoneNumber={props.phoneNumber} />
      <UploadButton />
      {/* <label htmlFor='contained-button-file'>
        <Button variant='contained' component='span'>
          Upload
        </Button>
      </label> */}
      {
        props.formCompleted ? (
          <Link to="../profile">
          <Button id='update' onClick = {props.updateProfile}>Update</Button>
          </Link>
          
          ) :
          
          (
            <Button id='submit' onClick={props.storeForm}>Submit</Button>
        )

      }
      
      {/* <Button id='submit' onClick={props.storeForm}>Submit</Button> */}
    </>
  )
}

export default Form
