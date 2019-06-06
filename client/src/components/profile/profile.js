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
import { Slide } from 'react-slideshow-image'
import { pink } from "@material-ui/core/colors";


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
    flexGrow: 1,
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // height: 'auto',
    // padding: "0",
    // margin: "0",
  },
  // mainContainer: {
  //   height: 'auto',
  //   padding: "0",
  //   margin: "0",
  // },
  paper: {
    // padding: theme.spacing(2),
    margin: "1rem",
    maxWidth: "auto"
  },

  image: {
    width: 128,
    height: 128
  },
  img: {
    //margin: "auto",
    //display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  card: {
    maxWidth: 400,
  },
  pencil: {
    position: "relative",
    marginTop: "30",
    marginRight: "10"
  },
  fab: {
    margin: theme.spacing(1),
    alignItems:"right",
    float: "right"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  slideShow : {
    height: 300
  },
  
  // eachSlide:{
  //   height: 150,
  //   width: "80%",
  //   display: flex,
  // align-items: center,
  // justify-content: center,
  // background-size: cover;
  // height: 300px;
  // },
  slideImg:{
    maxWidth: "100%",
    height: "auto",
    margin: "auto"

  },
  
});
function Profile(props, state) {
  const { classes, displayName, bio, skillInterest, int1, int2, int3, imageURL} = props;
console.log("HIIII" + imageURL)
  
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false
  }
  console.log('here is the image url:::: ', imageURL)
  return (
    <div className={classes.root}>
    <div className = "mainContainer">
      <Paper className={classes.paper}>
        <div className ={classes.slideShow}>
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${imageURL[0]})`}} className = {classes.slideImg}>
                {/* <span>Slide 1</span> */}
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${imageURL[1]})`} } className = {classes.slideImg}>
                {/* <span>Slide 2</span> */}
              </div>
            </div>
            <div className= "each-slide">
              <div style={{'backgroundImage': `url(${imageURL[2]})`}} className = {classes.slideImg}>
                {/* <span>Slide 3</span> */}
              </div>
            </div>
          </Slide>
            <div className={classes.pencil}>
          <Link to="../form">
          <Fab size="small" aria-label="Edit" className={classes.fab}>
              <Create />
            </Fab>
          </Link>
            </div>
        </div>      
        <Grid container spacing={2}>
          <card className={classes.card}>
            <CardContent>
              <Typography color="textSecondary">I am...</Typography>  
              <Typography color="textPrimary">{displayName}</Typography>
              <Typography color="textSecondary">My bio...</Typography>
              <Typography color="textPrimary">{bio}</Typography>
              <Typography color="textSecondary">I'm Interested in...</Typography>
              <Typography color="textPrimary">{skillInterest}</Typography>
              <Typography color="textSecondary">I like...</Typography>
              {/* <Breadcrumbs aria-lable="Breadcrumb"> */}
                <Typography color="textPrimary">{int1}</Typography>
                <Typography color="textPrimary">{int2}</Typography>
                <Typography color="textPrimary">{int3}</Typography>
              {/* </Breadcrumbs> */}
              {/* <Link to="../form">
                <Fab size="small" aria-label="Edit" className={classes.fab}>
                  <Create />
                </Fab>
              </Link> */}
            </CardContent>
          </card>
        </Grid>
{/* chart container for hamza */}
        <Grid container spacing={2}>
          <card className={classes.card}>
            <CardContent>
              <>
                <Typography color="Secondary">Charts</Typography>
              </>
            </CardContent>
          </card>
        </Grid>
      </Paper>
    </div>
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
