import React, { Component } from "react";
import { render } from "react-dom";

import Swipeable from "react-swipy";
// import React, { Component } from "react";
// import { render } from "react-dom";
// import { withStyles } from '@material-ui/styles'
// import Swipeable from "react-swipy";
// import App from "../../App";
import Card from "./Card";
import Button from "./Button"
// import Cady1 from "../../cady1.png"
// import { mergeClasses } from "@material-ui/styles";
// import React from "react";







const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = { position: "relative", width: "250px", height: "250px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
}

class Matches extends Component {
  state = {
    cards: ["Cady Heron", "Regina George", "Gretchen Wieners", "Karen Smith", "Kevin G."]
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));

  render() {
    const { cards, classes } = this.state;

    return (
      // <div className={classes.background}>
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
    );
  }
}


render(<Matches/>, document.getElementById("root"));
export default Matches


// import PropTypes from "prop-types";
// import { animated, interpolate } from "react-spring/hooks";
// import Carousel from "nuka-carousel";

// class Matches extends React.Component {
//   render() {
//     const { i, x, y, rot, scale, trans, bind, data } = this.props;
//     const { name, age, distance, text, pics } = data[i];

//     return (
//       <animated.div
//         key={i}
//         style={{
//           transform: interpolate(
//             [x, y],
//             (x, y) => `translate3d(${x}px,${y}px,0)`
//           )
//         }}
//       >
//         <animated.div
//           {...bind(i)}
//           style={{
//             transform: interpolate([rot, scale], trans)
//           }}
//         >
//           <div className="cards">
//             <Carousel>
//               {pics.map((pic, index) => (
//                 <img src={pic} key={index} alt="profilePicture" />
//               ))}
//             </Carousel>
//             <h2>{name},</h2>
//             <h2>{age}</h2>
//             <h5>{distance}</h5>
//             <h5>{text}</h5>
//           </div>
//         </animated.div>
//       </animated.div>
//     );
//   }
// }

// Card.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   distance: PropTypes.string,
//   text: PropTypes.string,
//   pics: PropTypes.array
// };

// export default Matches
