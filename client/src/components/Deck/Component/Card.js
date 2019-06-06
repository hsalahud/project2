import React, {Component} from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring";
import Carousel from "nuka-carousel";

class Card extends Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    // const { name, age, distance, text, pics } = data[i];
    const { name, bio, images, skillInterest, int1, int2, int3 } = data[i];

    return (
      <animated.div id = "animation1" className = 'damnAnimations'
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div id = "animation2" className = 'damnAnimations'
          {...bind(i)}
          style={{
            // transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="matchCard">
            <Carousel>
              {images.map((image, index) => (
                <img src={image} key={index} alt="profilePicture" />
              ))}
            </Carousel>
            <h2 id = 'matchName'>{name}</h2>
            {/* <h2 id = 'matchAge'>{age}</h2> */}

            <h5 id = 'skillsInterest'>{skillInterest}</h5>
            <h5 id = 'int1'>{int1}</h5>
            <h5 id = 'int2'>{int2}</h5>
            <h5 id = 'int3'>{int3}</h5>
            <h5 id = 'matchBio'>{bio}</h5>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
