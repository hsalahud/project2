import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import './skillInterests.css'

const styles = theme => ({
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
})

const SkillInterests = (props) => {
  return (
    <FormControl id='skills' className={styles.formControlSkills}>
      <InputLabel htmlFor='skills-helper'>Skill Interests</InputLabel>
      <Select
        key='skillInterests'
        id='skillInterest'
        value={props.skills}
        onChange={props.handleChangeSkills}
        input={<Input name='skills' id='skillInterest' />}
      >
        <MenuItem value='frontend'>Frontend</MenuItem>
        <MenuItem value='backend'>Backend</MenuItem>
        <MenuItem value='fullstack'>Full Stack</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SkillInterests
