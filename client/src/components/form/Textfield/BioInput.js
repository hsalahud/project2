import React, { Component } from 'react';
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

// const styles =  {
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   // textField: {
//   //   marginLeft: theme.spacing(1),
//   //   marginRight: theme.spacing(1),
//   // },
//   // dense: {
//   //   marginTop: theme.spacing(2),
//   // },
//   menu: {
//     width: 200,
//   },
// };

const BioInput = (props) => {

  // const handleChange = (props) => {
  //   props.handleChange()
  // }

  // // class BioInput extends Component {
  // //   render() {
  // //     const { handleInputChange, bio } = this.props


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
        // className={classes.textField}
        margin='normal'
      />
    </>

  )
}
// }


export default BioInput



{/* <input id = 'bio' key='bioTextfield1' onChange={props.handleInputChange} value={props.userBio} /> */}
