const { compareSync, hashSync } = require("bcrypt");

const bcrypt = {
 
  generateHash: (text) => {
    return hashSync(text, 1);
  },
 
  compareHash: (text, hashed) => {
    return compareSync(text, hashed);
  },
};

module.exports = bcrypt;