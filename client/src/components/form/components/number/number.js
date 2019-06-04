import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1)
  }
}))

const PhoneNumber = (props) => {
  console.log(props)
  return (
    <div className={useStyles.container}>
      <FormControl className={useStyles.formControl}>
        <InputLabel htmlFor='formatted-text-mask-input'>Phone Number</InputLabel>
        <Input
          key='phoneNumber'
          value={props.phone_number}
          onChange={props.handlePhoneNumber}
          id='formatted-text-mask-input'
        />
      </FormControl>
      />
    </div>
  )
}

export default PhoneNumber
