import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200
  },
  // dense: {
  //   marginTop: theme.spacing(2)
  // },
  menu: {
    width: 200
  }
}

const BioInput = (props) => {
  return (
    <>
      <TextField
        id='bio'
        key='bioTextfield2'
        label='Bio'
        multiline
        rowsMax='10'
        variant='outlined'
        value={props.userBio}
        onChange={props.handleInputChange}
        margin='normal'
      />
    </>
  )
}

export default BioInput
