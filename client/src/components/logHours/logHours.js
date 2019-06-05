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

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
  },
  LogHoursForm: {
    height: "100px",
    // width: 'auto',
    // margin: '0 auto'
  }
}))

const LogHoursForm = (props) => {

  return (
    <div>
      <TextField
        id='hrsWorked'
        label='Log Hours'
        required
        value={props.hrsWorked}
        onChange={props.handleInputChange}
        type='number'
        className={useStyles.textField}
        InputLabelProps={{
          shrink: true
        }}
        margin='normal'
        variant='filled'
      />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid container className={useStyles.grid} justify='space-around'>
          <KeyboardDatePicker
          id = 'timeStamp'
            margin='normal'
            label='Date picker'
            value={props.timeStamp}
            onChange={props.handleLogDate}
            required
            format = 'L'
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Button type='submit' variant='outlined' id='submitLog' onClick = {props.submitLogData}>Submit</Button>
    </div>)
}

export default LogHoursForm
