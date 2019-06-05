import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const styles = {
  root: {
    display: 'flex'
  },
  // formControlRb: {
  //   margin: theme.spacing(3)
  // },
  // group: {
  //   margin: theme.spacing(1, 0)
  // }
}

const RadioButtons = (props) => {
  return (
    <div className={styles.root}>
      <FormControl component='fieldset' className={styles.formControlRb}>
        <FormLabel component='legend'>Gender</FormLabel>
        <RadioGroup
          aria-label='Gender'
          key='radioButton1'
          id='isMale'
          name='gender1'
          className={styles.group}
          value={props.valueG}
          onChange={props.handleChangeRb}
        >
          <FormControlLabel value='0' control={<Radio />} label='Female' />
          <FormControlLabel value='1' control={<Radio />} label='Male' />
        </RadioGroup>
      </FormControl>
      <FormControl component='fieldset' className={styles.formControlRb}>
        <FormLabel component='legend'>Interested In</FormLabel>
        <RadioGroup
          aria-label='gender'
          key='radioButton1'
          id='interestedIn'
          name='interested_in'
          className={styles.group}
          value={props.valueI}
          onChange={props.handleChangeRb2}
        >
          <FormControlLabel
            value='0'
            control={<Radio color='primary' />}
            label='Female'
            labelPlacement='start'
          />
          <FormControlLabel
            value='1'
            control={<Radio color='primary' />}
            label='Male'
            labelPlacement='start'
          />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default RadioButtons
