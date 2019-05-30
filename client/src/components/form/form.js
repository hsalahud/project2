import React, { Component } from 'react'
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

function TextMaskCustom (props) {
  const { inputRef, ...other } = props

  console.log("TextMaskCustom")
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
}

function Form () {
  console.log("Form")
  const classes = useStyles()
  const [values, setValues] = React.useState({
    multiline: '',
    textmask: '(1  )    -    ',
    numberformat: '1320',
    skills: ''
  })

  const handleChange = name => event => {
    console.log("handleChange")
    setValues({ ...values, [name]: event.target.value })
  }
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  function handleDateChange (date) {
    console.log("handleDateChange")
    setSelectedDate(date)
  }
  const [value, setValue] = React.useState('female')

  function handleChangeRb (event) {
    console.log("handleChangeRb")
    setValue(event.target.value)
  }
  function handleChangeSkills (event) {
    console.log("handleChangeSkills")
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }))
  }

  function testrb (event) {
    console.log("TestRb")
    console.log(event.target.value)
  }

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <TextField
        id='bio'
        label='Bio'
        multiline
        rowsMax='10'
        variant='outlined'
        value={values.multiline}
        onChange={handleChange('multiline')}
        className={classes.textField}
        margin='normal'
      />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid container className={classes.grid} justify='space-around'>
          <KeyboardDatePicker
            id='dob'
            margin='normal'
            label='DOB'
            value={selectedDate}
            onChange={handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='formatted-text-mask-input'>Phone Number</InputLabel>
          <Input
            value={values.textmask}
            onChange={handleChange('textmask')}
            id='phone_number'
            inputComponent={TextMaskCustom}
          />
        </FormControl>
      </div>
      <FormControl className={classes.formControlSkills}>
        <InputLabel htmlFor='skills-helper'>Skill Interests</InputLabel>
        <Select
          value={values.skills}
          onChange={handleChangeSkills}
          input={<Input name='skills' id='skillInterest' />}
        >
          <MenuItem value={1}>Frontend</MenuItem>
          <MenuItem value={2}>Backend</MenuItem>
          <MenuItem value={3}>Full Stack</MenuItem>
        </Select>
      </FormControl>

      <div className={classes.root}>
        <FormControl component='fieldset' className={classes.formControlRb}>
          <FormLabel component='legend'>Gender</FormLabel>
          <RadioGroup
            aria-label='Gender'
            id='isMale'
            name='gender'
            className={classes.group}
            value={value}
            onChange={handleChangeRb}
            onClick={testrb}
          >
            <FormControlLabel value='0' control={<Radio />} label='Female' />
            <FormControlLabel value='1' control={<Radio />} label='Male' />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component='fieldset' className={classes.formControlRb}>
          <FormLabel component='legend'>Interested In</FormLabel>
          <RadioGroup
            aria-label='Interested In'
            id='interestedIn'
            name='interested in'
            className={classes.group}
            value={value}
            onChange={handleChangeRb}
          >
            <FormControlLabel value='0' control={<Radio />} label='Female' />
            <FormControlLabel value='1' control={<Radio />} label='Male' />
          </RadioGroup>
        </FormControl>
      </div>

      <TextField
        id='int1'
        label='Interest 1'
        className={classes.textField}
        margin='normal'
      /><TextField
        id='int2'
        label='Interest 2'
        className={classes.textField}
        margin='normal'
      />
      <TextField
        id='int3'
        label='Interest 3'
        className={classes.textField}
        margin='normal'
      />
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
      />
      <label htmlFor='contained-button-file'>
        <Button variant='contained' component='span' className={classes.button}>
          Upload
        </Button>
      </label>
    </form>
  )
}

export default Form
