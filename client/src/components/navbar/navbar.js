import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PieChartIcon from '@material-ui/icons/PieChart'
import PersonIcon from '@material-ui/icons/Person'
import MoodIcon from '@material-ui/icons/Mood'
import ChatIcon from '@material-ui/icons/Chat'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
})

function NavBar () {
  const classes = useStyles()
  // This line of code is using React hooks
  const [value, setValue] = useState('stats')

  function handleChange (event, newValue) {
    setValue(newValue)
    console.log(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <Link to='/stats'>
        <BottomNavigationAction label='Stats' value='stats' icon={<PieChartIcon />} />
      </Link>
      <Link to='/profile'>
        <BottomNavigationAction label='Profile' value='profile' icon={<PersonIcon />} />
      </Link>
      <Link to='/matches'>
        <BottomNavigationAction label='Matches' value='matches' icon={<MoodIcon />} />
      </Link>
      <Link to='/chat'>
        <BottomNavigationAction label='Chat' value='chat' icon={<ChatIcon />} />
      </Link>
    </BottomNavigation>
  )
}

export default NavBar
