import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { animated, interpolate } from 'react-spring'
import Carousel from 'nuka-carousel'

class Card extends Component {
  render () {
    const { i, x, y, rot, scale, trans, bind, data } = this.props
    const { name, age, distance, text, pics } = data[i]

    return (
      <animated.div id='animation1' className='damnAnimations'
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div id='animation2' className='damnAnimations'
          {...bind(i)}
          style={{
            // transform: interpolate([rot, scale], trans)
          }}
        >
          <div className='matchCard'>
            <Carousel>
              {pics.map((pic, index) => (
                <img src={pic} key={index} alt='profilePicture' />
              ))}
            </Carousel>
            <h2 id='matchName'>{name},</h2>
            <h2 id='matchAge'>{age}</h2>
            <h5 id='matchDistance'>{distance}</h5>
            <h5 id='matchText'>{text}</h5>
          </div>
        </animated.div>
      </animated.div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
}

export default Card
