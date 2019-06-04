import React, { Component } from "react";
import { render } from "react-dom";
import { withStyles } from '@material-ui/styles'
import Swipeable from "react-swipy";
import App from "../../App";
import Card from "./Card";
import Button from "./Button"
import Cady1 from "../../cady1.png"
import { mergeClasses } from "@material-ui/styles";

const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden",
  margin: '0 auto'
};

const wrapperStyles = { 
  position: "relative", 
  width: "250px", 
  height: "250px",
  marginBottom: '250px'
};
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

class Matches extends Component {
  state = {
    cards: ["Cady Heron", "Regina George", "Gretchen Wieners", "Karen Smith", "Kevin G."]
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));

  render() {
    const { cards, classes } = this.state;

    return (
      <div className={classes.background}>
      <div style={appStyles}>
        <div style={wrapperStyles}>
          {cards.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>
                    <Button onClick={left}>no</Button>
                    <Button onClick={right}>yes</Button>
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <Card>{cards[0]}</Card>
              </Swipeable>
              {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
            </div>
          )}
              <div>
    </div>
 
          {cards.length <= 1 && <Card zIndex={-2}>CARDI</Card>}

          
        </div>
      </div>
      </div>
    );
  }
}


render(<Matches />, document.getElementById("root"));
export default Matches


