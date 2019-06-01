import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  rootSkills: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControlSkills: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const SkillInterests = (props) => {
  return (
    <FormControl className={useStyles.formControlSkills}>
      <InputLabel htmlFor='skills-helper'>Skill Interests</InputLabel>
      <Select
        key='skillInterests'
        id='skillInterest'
        value={props.skills}
        onChange={props.handleChangeSkills}
        input={<Input name='skills' id='skillInterest' />}
      >
        <MenuItem value={1}>Frontend</MenuItem>
        <MenuItem value={2}>Backend</MenuItem>
        <MenuItem value={3}>Full Stack</MenuItem>
      </Select>
    </FormControl>
  )
}

// function skillInterests () {
//   const classes = useStyles()
//   const [values, setValues] = useState({
//     skills: ''
//   })

//   function handleChangeSkills (event) {
//     setValues(oldValues => ({
//       ...oldValues,
//       [event.target.name]: event.target.value
//     }))
//   }

//   return (
//     <FormControl className={classes.formControlSkills}>
//       <InputLabel htmlFor='skills-helper'>Skill Interests</InputLabel>
//       <Select
//         value={values.skills}
//         onChange={handleChangeSkills}
//         input={<Input name='skills' id='skillInterest' />}
//       >
//         <MenuItem value={1}>Frontend</MenuItem>
//         <MenuItem value={2}>Backend</MenuItem>
//         <MenuItem value={3}>Full Stack</MenuItem>
//       </Select>
//     </FormControl>
//   )
// }

export default SkillInterests
