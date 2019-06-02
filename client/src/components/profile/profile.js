import React, { Component } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
// import Avatar from '@material-ui/core/Avatar'
import './profile.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Users from '../../utils/Users.js'
import trialImg from './assets/images/pf1.jpg'
// import { makeStyles } from '@material-ui/core/styles';
// import Fab from '@material-ui/core/Fab';
// import Icon from '@material-ui/core/Icon';


// const useStyles = makeStyles(theme => ({
//   fab: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

// function FloatingActionButtons() {
//   const classes = useStyles();

//   return (
//     <div>
//       <Fab color="secondary" aria-label="Edit" className={classes.fab}>
//         <Icon>edit_icon</Icon>
//       </Fab>
//     </div>
//   );
// }

// export default FloatingActionButtons;

// import placeholder from components
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  card: {
    maxWidth: 345,
  },
});
let qresponse = null
let name = null

function ComplexGrid(props) {
  const { classes, displayName, bio, skillInterest, int1, int2, int3} = props
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Card className={classes.card}>
            <CardActionArea>
              <div className={CardMedia}>
              <CardMedia component="img"
                alt="Profile Picture"
                height="200"
                image ={trialImg} alt="trial image"
                title="My Picture"
              />
              </div>
              {/* <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is about me
                </Typography>
                <Breadcrumbs aria-label="Breadcrumb">
                  <Typography color="textPrimary">Breadcrumb</Typography>
                </Breadcrumbs>
              </CardContent> */}
            </CardActionArea>
          </Card>          
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Breadcrumbs aria-label="Breadcrumb">
            <Typography color="textPrimary">{displayName}</Typography>
          </Breadcrumbs>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Breadcrumbs aria-label="Breadcrumb">
            <Typography color="textPrimary">{bio}</Typography>
          </Breadcrumbs>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Breadcrumbs aria-label="Breadcrumb">
            <Typography color="textPrimary">{skillInterest}</Typography>
          </Breadcrumbs>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Breadcrumbs aria-label="Breadcrumb">
            <Typography color="textPrimary">{int1}</Typography>
          </Breadcrumbs>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Breadcrumbs aria-label="Breadcrumb">
            <Typography color="textPrimary">{int2}</Typography>
          </Breadcrumbs>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Breadcrumbs aria-label="Breadcrumb">
            <Typography color="textPrimary">{int3}</Typography>
          </Breadcrumbs>
        </Grid>
      </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);


//Write back-end with consoles to make sure you are recieving right responses
//Write front-end with variables for info that you want to display 
//Pass the response from the database to front end into variables that are created (name, photo ... etc)


