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
import './logHours.css'
import logo from '../../white0101.png'
// import { withStyles } from '@material-ui/styles'

// const styles = theme => ({
//   paper: { 
//     position: 'absolute',
//     width: 400,
//     backgroundColor: 'whitesmoke',
//     boxShadow: '5px',
//     padding: '4px',
//     outline: 'none',
//   },
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     backgroundColor: 'whitesmoke'
//   },
//   textField: {
//     marginLeft: '1px',
//     marginRight: '1px'
//   },
//   dense: {
//     marginTop: 16
//   },
//   menu: {
//     width: 200
//   },
//   grid: {
//     width: '100%',
//   },
//   LogHoursForm: {
//     height: "100px",
//     margin: '0 auto',
//     display: 'flex',
//   },
//   textField: {
//     backgroundColor: 'black',
//     margin: '0 auto'
//   },
//   timeStamp: {
//     backgroundColor: 'white'
//   }
// })

const LogHoursForm = (props) => {

  return (
    <div>
      <img src={logo} id="appLogo" alt="logo" style={{width: 120, height: 170, marginLeft:150, marginTop: 20}}/>
      
    <div id="logContainer">
      <div id="hrsWorked">
      <TextField
        id='hrsWorked'
        label='Log Hours'
        required
        value={props.hrsWorked}
        onChange={props.handleInputChange}
        type='number'
        className={makeStyles.textField}
        InputLabelProps={{
          shrink: true
        }}
        margin='normal'
        variant='filled'
      />
      </div>
      <div id="date">
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid container className={makeStyles.grid} justify='space-around'>
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
      </div>
      <div id="submit">
      <Button type='submit' variant='contained' id='submitLog' onClick = {props.submitLogData}>Submit</Button>
    </div>
    </div>
    </div>
    )
}

export default LogHoursForm
