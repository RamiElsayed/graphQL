const { default: axios } = require("axios");

const user = async (parent, { username }, context) => {
  const url = `https://api.github.com/users/${username}`;

  const { data } = await axios.get(url);
};
module.exports = user;
