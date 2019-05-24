const { Image } = require('../models')
let randomstring = require("randomstring");

// module.exports = _ => {

Image.bulkCreate([
  {
    text: randomstring.generate(),
    userId: 1
  },
  {
    text: randomstring.generate(),
    userId: 1
  },
  {
    text: randomstring.generate(),
    userId: 2
  },
  {
    text: randomstring.generate(),
    userId: 2
  },
  {
    text: randomstring.generate(),
    userId: 3
  },
  {
    text: randomstring.generate(),
    userId: 3
  },
  {
    text: randomstring.generate(),
    userId: 4
  },
  {
    text: randomstring.generate(),
    userId: 4
  },
  {
    text: randomstring.generate(),
    userId: 5
  },
  {
    text: randomstring.generate(),
    userId: 5
  },
  {
    text: randomstring.generate(),
    userId: 6
  },
  {
    text: randomstring.generate(),
    userId: 6
  },
  {
    text: randomstring.generate(),
    userId: 7
  },
  {
    text: randomstring.generate(),
    userId: 7
  },
  {
    text: randomstring.generate(),
    userId: 8
  },
  {
    text: randomstring.generate(),
    userId: 8
  },
  {
    text: randomstring.generate(),
    userId: 9
  },
  {
    text: randomstring.generate(),
    userId: 9
  },
  {
    text: randomstring.generate(),
    userId: 10
  },
  {
    text: randomstring.generate(),
    userId: 10
  },
  {
    text: randomstring.generate(),
    userId: 11
  },
  {
    text: randomstring.generate(),
    userId: 11
  },
  {
    text: randomstring.generate(),
    userId: 12
  },
  {
    text: randomstring.generate(),
    userId: 12
  },
  {
    text: randomstring.generate(),
    userId: 13
  },
  {
    text: randomstring.generate(),
    userId: 13
  },
  {
    text: randomstring.generate(),
    userId: 14
  },
  {
    text: randomstring.generate(),
    userId: 14
  },
  {
    text: randomstring.generate(),
    userId: 15
  },
  {
    text: randomstring.generate(),
    userId: 15
  },
  {
    text: randomstring.generate(),
    userId: 16
  },
  {
    text: randomstring.generate(),
    userId: 16
  },
  {
    text: randomstring.generate(),
    userId: 17
  },
  {
    text: randomstring.generate(),
    userId: 17
  },
  {
    text: randomstring.generate(),
    userId: 18
  },
  {
    text: randomstring.generate(),
    userId: 18
  },
  {
    text: randomstring.generate(),
    userId: 19
  },
  {
    text: randomstring.generate(),
    userId: 19
  },
  {
    text: randomstring.generate(),
    userId: 20
  },
  {
    text: randomstring.generate(),
    userId: 20
  }  
]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
  return Image.findAll();
}).then(images => {
  console.log('added Successfully') // ... in order to get the array of user objects
}).catch(e => console.log(e))