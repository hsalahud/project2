import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const BioInput = (classes, {handleInputChange, bio}) => (

  <TextField
  key='bio'
  label='Bio'
  multiline
  rowsMax='10'
  variant='outlined'
  value={bio}
  onChange = {handleInputChange}
  className={classes.textField}
  margin='normal'
  />
  
)


export default BioInput