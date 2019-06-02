import React from 'react'
import clsx from 'clsx'
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

// const Form = ({ storeImage, handleInputChange }) => {
//   const classes = useStyles()
//   const [values, setValues] = useState({
//     multiline: ''
//   })

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value })
//   }

//   return (
//     <form className={classes.container} noValidate autoComplete='off'>
//       <TextField
//         id='bio'
//         label='Bio'
//         multiline
//         rowsMax='10'
//         variant='outlined'
//         value={values.multiline}
//         onChange={handleChange('multiline')}
//         className={classes.textField}
//         margin='normal'
//       />
//     </form >
//   )
// }
