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

// function Number () {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(new Date())

//   const classes = useStyles()

//   function handleDateChange (date) {
//     setSelectedDate(date)
//   }

//   return (
//     <MuiPickersUtilsProvider utils={MomentUtils}>
//       <Grid container className={classes.grid} justify='space-around'>
//         <KeyboardDatePicker
//           id='dateOfBirth'
//           margin='normal'
//           label='Date of Birth'
//           value={selectedDate}
//           onChange={handleDateChange}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   )
// }

export default DateofBirth
