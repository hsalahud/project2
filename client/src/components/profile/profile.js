import React, { Component } from "react";
// import { makeStyles } from '@material-ui/core/styles'
// import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid";
// import Button from '@material-ui/core/Button'
// import Avatar from '@material-ui/core/Avatar'
import "./profile.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Users from "../../utils/Users.js";
import trialImg from "./assets/images/pf1.jpg";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Create from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
// var ReactDOM = require('react-dom');
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

{
  /* <div className={CardMedia}>
<CardMedia

  component="img"
  alt="Profile Picture"
  height="200"
  image={props.imageURL[0]}
  alt="trial image"
  title="My Picture"
 />
</div> */
}

// import placeholder from components
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },

  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  card: {
    maxWidth: 345
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
});
let qresponse = null;
let name = null;



function Profile(props) {
  const { classes, displayName, bio, skillInterest, int1, int2, int3 } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Card className={classes.card}>
            
            <Carousel>

             {/* {
               props.imageURL.map (url => (
                 <div>
                   <img src = {url}/>
                   </div>
               ))
             } */}

            </Carousel>



           
          </Card>
        </Grid>
      </Paper>





      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <div>
            <Fab size="small" aria-label="Edit" className={classes.fab} />
          </div>
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
      <Link to="../form">
        <Create />
      </Link>
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

// ReactDOM.render(<Profile/>, document.querySelector('.demo-carousel'));

export default withStyles(styles)(Profile);

//Write back-end with consoles to make sure you are recieving right responses
//Write front-end with variables for info that you want to display
//Pass the response from the database to front end into variables that are created (name, photo ... etc)
