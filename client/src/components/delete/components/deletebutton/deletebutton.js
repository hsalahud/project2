import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'

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

const DeleteButton = (props) => {
  return (
    <>
      <Link to='/deleteprofile' >
        <Button id='delete' variant='contained' component='span' color='secondary' className={useStyles.button}>
          Delete
          <DeleteIcon className={useStyles.rightIcon} />
        </Button>
      </Link>
    </>
  )
}
export default DeleteButton
