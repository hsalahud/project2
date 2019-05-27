import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

function Skills () {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    skills: ''
  })

  function handleChange (event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <form className={classes.root} autoComplete='off'>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='skills-helper'>Skill Interests</InputLabel>
        <Select
          value={values.skills}
          onChange={handleChange}
          input={<Input name='skills' id='skills-helper' />}
        >
          <MenuItem value={1}>Frontend</MenuItem>
          <MenuItem value={2}>Backend</MenuItem>
          <MenuItem value={3}>Full Stack</MenuItem>
        </Select>
      </FormControl>
    </form>
  )
}

export default Skills
