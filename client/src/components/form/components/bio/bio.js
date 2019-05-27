import React from 'react'
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
  }
}))

function Bio () {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    multiline: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <TextField
        id='standard-multiline-flexible'
        label='Bio'
        multiline
        rowsMax='10'
        variant='outlined'
        value={values.multiline}
        onChange={handleChange('multiline')}
        className={classes.textField}
        margin='normal'
      />
    </form>
  )
}

export default Bio
