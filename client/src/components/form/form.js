import React, { useState, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import MomentUtils from '@date-io/moment'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import MaskedInput from 'react-text-mask'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import BioInput from './Textfield'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  grid: {
    width: '60%'
  },
  formControl: {
    margin: theme.spacing(1)
  },
  root: {
    display: 'flex'
  },
  formControlRb: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0),
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row'
  },
  formControlSkills: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  rootSkills: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}))

// function TextMaskCustom (props) {
//   const { inputRef, ...other } = props

//   return (
//     <MaskedInput
//       {...other}
//       ref={ref => {
//         inputRef(ref ? ref.inputElement : null)
//       }}
//       mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
//       placeholderChar={'\u2000'}
//       showMask
//     />
//   )
// }

// TextMaskCustom.propTypes = {
//   inputRef: PropTypes.func.isRequired
// }

// const classes = useStyles()
// const [values, setValues] = useState({
//   multiline: '',
//   textmask: '(  )    -    ',
//   numberformat: '1320',
//   skills: ''
// })

// const handleChange = name => event => {
//   setValues({multiline: event.target.value })
//   console.log(values.multiline)
// }

// const [selectedDate, setSelectedDate] = useState(new Date())

// function handleDateChange (date) {
//   setSelectedDate(date)
// }
// const [valueG, setValueG] = useState('female')
// const [valueI, setValueI] = useState('male')

// function handleChangeRb (event) {
//   setValueG(event.target.value)
// }
// function handleChangeRb2 (event) {
//   setValueI(event.target.value)
// }

// function handleChangeSkills (event) {
//   setValues(oldValues => ({
//     ...oldValues,
//     [event.target.name]: event.target.value
//   }))
// }

// function testrb (event) {
//   console.log(event.target.value)
// }

const Form = (props) => {
 
// class Form extends Component {

  // render() {
  //   const { handleInputChange, bio } = this.props

    return (
      <>
      <BioInput key='bioTextfield1' handleInputChange={props.handleInputChange} userBio={props.bio} />
      </>
    )
  }
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