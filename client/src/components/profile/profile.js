import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

// import './profile.css'
const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});
function Profile() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src="./Jaga.JPG" className={classes.avatar} />
      <Avatar alt="Remy Sharp" src="./Jaga.JPG" className={classes.bigAvatar} />
    </Grid>
  );


  }
// class Profile extends Component {
//   render () {
//     const {uid } = this.props
//     console.log("This is profile page")
//     console.log(uid)
//     return (
//       <>
//         <h1>Hello this is the Profile Page</h1>
//       </>
//     )
//   }
// }

export default Profile
