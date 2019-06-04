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
import PhoneNumber from './components/number/number'

const Form = (props) => {

  // class Form extends Component {
  //   render () {
  //     const { handleInputChange, bio } = this.props
  return (
    <>
      <BioInput key='bioTextfield1' handleInputChange={props.handleInputChange} userBio={props.userBio} />
      <DateofBirth key='dateOfBirth' handleInputChange={props.handleInputChange} handleDateChange={props.handleDateChange} selectedDate={props.dob} />
      <RadioButtons key='radioButton1' handleInputChange={props.handleInputChange} handleChangeRb={props.handleChangeRb} handleChangeRb2={props.handleChangeRb2} ValueG={props.isMale} ValueI={props.interestedIn} />
      <SkillInterests key='skillInterests' handleInputChange={props.handleInputChange} handleChangeSkills={props.handleChangeSkills} Skills={props.skillInterest} />
      <PersonalInterests key='personalInterestCollection' handleInputChange={props.handleInputChange} handleInterest1={props.handleInterest1} handleInterest2={props.handleInterest2} handleInterest3={props.handleInterest3} int1={props.int1} int2={props.int2} int3={props.int3} />
      <PhoneNumber key='phoneNumber' handleInputChange={props.handleInputChange} handlePhoneNumber={props.handlePhoneNumber} phoneNumber={props.phoneNumber} />
      {/* <input
        accept='image/*'
        // className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
      /> */}
      <UploadButton />
      {/* <label htmlFor='contained-button-file'>
        <Button variant='contained' component='span'>
          Upload
        </Button>
      </label> */}
      <Button id='submit' onClick={props.storeForm}>Submit</Button>
    </>
  )
}
// }
// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200
//   },
//   root: {
//     display: 'flex'
//   },
//   group: {
//     margin: theme.spacing(1, 0),
//     width: 'auto',
//     height: 'auto',
//     display: 'flex',
//     flexWrap: 'nowrap',
//     flexDirection: 'row'
//   },
//   button: {
//     margin: theme.spacing(1)
//   },
//   input: {
//     display: 'none'
//   }
// }))

// const Form = ({ storeImage, handleInputChange }) => {
//   const classes = useStyles()
//   const [values, setValues] = useState({
//     multiline: '',
//   })

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value })
//   }

// return (
//       <input
//         accept='image/*'
//         className={classes.input}
//         id='contained-button-file'
//         multiple
//         type='file'
//       />
//       <label htmlFor='contained-button-file'>
//         <Button variant='contained' component='span' className={classes.button}>
//           Upload
//         </Button>
//       </label>
//       <Button id='submit' onClick={storeImage}>Submit</Button>
//   )
// }

export default Form

// <Router>
// <div>
//   <Route path='/' component={() => isSignedIn ? (
//     <>
//       <NavBar />
//       {/* <Login uiConfig={uiConfig} isSignedIn={isSignedIn} displayName={displayName} email={email} uid={uid} /> */}
//       {/* <LogHoursForm/> */}
//       {/* <BarExample/> */}
//       <Form storeImage = {this.storeImage} handleInputChange = {this.handleInputChange} bio = {bio}/>
//     </>
//   )
//     :
//     (<Login uiConfig={uiConfig} isSignedIn={isSignedIn} />)
//   } />

// </div>
// </Router>
