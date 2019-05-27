import 'date-fns'
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

function Dob () {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const classes = useStyles()

  function handleDateChange (date) {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container className={classes.grid} justify='space-around'>
        <KeyboardDatePicker
          margin='normal'
          label='Birth Date'
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

export default Dob
