import React from 'react'
import clsx from 'clsx'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}))

const UploadButton = (props) => {
  return (
    <Button variant='contained' color='default' className={useStyles.button}>
      Upload
      <CloudUploadIcon className={useStyles.rightIcon} />
      <input
        accept='image/*'
        className={useStyles.input}
        id='contained-button-file'
        multiple
        type='file'
      />
    </Button>
  )
}

export default UploadButton
