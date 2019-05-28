import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
const moment = require('moment')

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  grid: {
    width: '60%'
  }
}))

function LogHoursForm () {
  const [selectedDate, setSelectedDate] = React.useState(moment())

  function handleDateChange (date) {
    setSelectedDate(date)
  }

  const classes = useStyles()
  const [values, setValues] = React.useState({
    hours: ''
  })
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <TextField
        id='hours'
        label='Log Hours'
        required
        value={values.age}
        onChange={handleChange('hours')}
        type='number'
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        margin='normal'
        variant='filled'
      />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid container className={classes.grid} justify='space-around'>
          <KeyboardDatePicker
            margin='normal'
            label='Date picker'
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Button type='submit' variant='outlined' id='submitLog'>Submit</Button>
    </div>)
}

export default LogHoursForm
