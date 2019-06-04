import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import MomentUtils from '@date-io/moment'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

const useStyles = makeStyles({
  grid: {
    width: '60%'
  }
})

const DateofBirth = (props) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container className={useStyles.grid} justify='space-around'>
        <KeyboardDatePicker
          id='dob'
          key='dateOfBirth'
          margin='normal'
          label='Date of Birth'
          value={props.selectedDate}
          onChange={props.handleDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

export default DateofBirth
