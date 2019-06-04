import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
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
  menu: {
    width: 200
  }
}))

const PersonalInterests = (props) => {
  return (
    <form className={useStyles.container} noValidate autoComplete='off'>
      <div>
        <TextField
          key='personalInterest1'
          id='int1'
          label='Interest 1'
          className={useStyles.textField}
          margin='normal'
          value={props.int1}
          onChange={props.handleInterest1}
        />
      </div>
      <div>
        <TextField
          key='personalInterest2'
          id='int2'
          label='Interest 2'
          className={useStyles.textField}
          margin='normal'
          value={props.int2}
          onChange={props.handleInterest2}
        />
      </div>
      <div>
        <TextField
          key='personalInterest3'
          id='int3'
          label='Interest 3'
          className={useStyles.textField}
          margin='normal'
          value={props.int3}
          onChange={props.handleInterest3}
        />
      </div>
    </form>
  )
}

// function PersonalInterests () {
//   const classes = useStyles()
//   const [values, setValues] = React.useState({
//     multiline: '',
//   })

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value })
//   }

//   return (
//     <form className={classes.container} noValidate autoComplete="off">
//       <TextField
//         id='int1'
//         label='Interest 1'
//         className={classes.textField}
//         margin='normal'
//       />
//       <TextField
//         id='int2'
//         label='Interest 2'
//         className={classes.textField}
//         margin='normal'
//       />
//       <TextField
//         id='int3'
//         label='Interest 3'
//         className={classes.textField}
//         margin='normal'
//       />
//     </form>
//   )
// }

export default PersonalInterests
