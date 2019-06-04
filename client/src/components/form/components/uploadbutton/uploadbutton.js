import React from 'react'
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
    <>
      <input hidden
        accept='image/*'
        className={useStyles.input}
        key='uploadButton'
        id='contained-button-file'
        value={props.upload}
        multiple
        type='file'
      />
      <label htmlFor='contained-button-file' >
        <Button variant='contained' component='span' color='default' className={useStyles.button}>
          Upload
          <CloudUploadIcon className={useStyles.rightIcon} />
        </Button>
      </label>
    </>
    // <CloudUploadIcon className={useStyles.rightIcon} >
    //   <input
    //     accept='image/*'
    //     className={useStyles.input}.
    //     key='uploadButton'
    //     id='contained-button-file'
    //     value={props.upload}
    //     multiple
    //     type='file'
    //   />
    //   <Button variant='contained' color='default' className={useStyles.button}>
    //     Upload
    //   </Button>
    // </CloudUploadIcon>
  )
}

export default UploadButton
