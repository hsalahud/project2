import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

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
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}))

function TextFields () {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    name: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <TextField
        id='standard-name'
        label='Name'
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin='normal'
      />
    </form>
  )
}

export default TextFields
