const { default: axios } = require("axios");

const following = async (parent, args, context) => {
  console.log("PARENT", parent);
  const url = `https://api.github.com/users/${parent.username}/following`;

  const { data } = await axios.get(url);
  console.log(data);
  return data.map((each) => ({
    username: each.login,
    id: each.id,
    profileImageUrl: each.avatar_url,
    profileUrl: each.html_url,
  }));
};
module.exports = following;
