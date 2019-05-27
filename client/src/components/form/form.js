import React, { Component } from 'react'
import Textfield from './components/textfield'
import RadioButtonsGroup from './components/radiobutton/radiobutton'
import Bio from './components/bio/bio'
import Phonenumber from './components/phonenumber/phonenumber'
import Dob from './components/dob/dob'
import Skills from './components/skills/skills'

class Form extends Component {
  render () {
    return (
      <>
        <Textfield />
        <RadioButtonsGroup />
        <Phonenumber />
        <Dob />
        <Skills />
        <Bio />
      </>
    )
  }
}

export default Form
