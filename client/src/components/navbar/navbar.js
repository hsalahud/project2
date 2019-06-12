import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PieChartIcon from '@material-ui/icons/PieChart'
import PersonIcon from '@material-ui/icons/Person'
import MoodIcon from '@material-ui/icons/Mood'
import ChatIcon from '@material-ui/icons/Chat'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ScheduleIcon from '@material-ui/icons/Schedule'
import BallotIcon from '@material-ui/icons/Ballot'
import firebase from 'firebase'
import Form from '../form'

const useStyles = makeStyles({
  navRoot: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  paper: {
    background: 'white'
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

  const [state, setState] = React.useState({
    bottom: false
  })

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const fullList = side => (
    <div
      className={classes.fullList}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['/profile', '/logHours'].map((text, index) => (
          <Link to={'..' + text} ><ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <BallotIcon /> : <ScheduleIcon />}</ListItemIcon>
            {/* <ListItemText primary={text} /> */}
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.navRoot}>
      <Link to='/stats'>
        {/* <BottomNavigationAction label='Stats' value='stats' icon={<PieChartIcon />} /> */}
      </Link>
      <Link to='/profile'>
        <>
          <BottomNavigationAction label='Profile' value='profile' icon={<PersonIcon />} onClick={toggleDrawer('bottom', true)} />
          {/* <Drawer classes={{ paper: classes.paper }} anchor='bottom' open={state.bottom} onClose={toggleDrawer('bottom', false)}>
            {fullList('bottom')}
          </Drawer> */}
        </>
      </Link>
      <Link to='/deck'>
        <BottomNavigationAction label='Deck' value='deck' icon={<MoodIcon />} />
      </Link>
      <Link to='/chat'>
        <BottomNavigationAction label='Chat' value='chat' icon={<ChatIcon />} />
      </Link>
      <Link to='/'>
        <BottomNavigationAction label='Sign Out' value='signout' icon={<MeetingRoomIcon />} onClick={() => firebase.auth().signOut()} />
      </Link>
    </BottomNavigation>
  )
}

export default NavBar
