const { default: axios } = require("axios");

const user = async (parent, { username }, context) => {
  const url = `https://api.github.com/users/${username}`;

  const { data } = await axios.get(url);

  return {
    username: data.login,
    id: data.id,
    profileImageUrl: data.avatar_url,
    profileUrl: data.html_url,
    name: data.name,
    company: data.company,
    blog: data.blog,
    location: data.location,
    email: data.email,
    bio: data.bio,
    twitter_username: data.twitter_username,
    numberOfPublicRepos: data.public_repos,
    numberOfFollowers: data.followers,
    numberOfFollowing: data.following,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
};
module.exports = user;
