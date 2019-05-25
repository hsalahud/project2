import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PieChartIcon from '@material-ui/icons/PieChart'
import PersonIcon from '@material-ui/icons/Person'
import MoodIcon from '@material-ui/icons/Mood'
import ChatIcon from '@material-ui/icons/Chat'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
})

function NavBar () {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents')

  function handleChange (event, newValue) {
    setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label='Stats' value='stats' icon={<PieChartIcon />} />
      <BottomNavigationAction label='Profile' value='profile' icon={<PersonIcon />} />
      <BottomNavigationAction label='Matches' value='matches' icon={<MoodIcon />} />
      <BottomNavigationAction label='Chat' value='chat' icon={<ChatIcon />} />
    </BottomNavigation>
  )
}

export default NavBar
