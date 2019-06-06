import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import './personalInterests.css'

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
  menu: {
    width: 200
  }
}))

const PersonalInterests = (props) => {
  return (
    <form id='personal' className={useStyles.container} noValidate autoComplete='off'>
      <div id='title' font-size='16px'>
        <h4>Personal Interests</h4>
      </div>
      <div>
        <TextField
          key='personalInterest1'
          id='int1'
          label='Interest 1'
          className={useStyles.textField}
          margin='normal'
          value={props.int1}
          onChange={props.handleInterest1}
        />
      </div>
      <div>
        <TextField
          key='personalInterest2'
          id='int2'
          label='Interest 2'
          className={useStyles.textField}
          margin='normal'
          value={props.int2}
          onChange={props.handleInterest2}
        />
      </div>
      <div>
        <TextField
          key='personalInterest3'
          id='int3'
          label='Interest 3'
          className={useStyles.textField}
          margin='normal'
          value={props.int3}
          onChange={props.handleInterest3}
        />
      </div>
    </form>
  )
}

export default PersonalInterests
