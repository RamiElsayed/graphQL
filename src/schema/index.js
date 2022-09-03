const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    username: String
    id: ID
    profileImageUrl: String
    profileUrl: String
    followers: [User]
    following: [User]
    repos: [Repo]
    name: String
    company: String
    blog: String
    location: String
    email: String
    bio: String
    twitter_username: String
    numberOfPublicRepos: Int
    numberOFollowers: Int
    numberOfFollowing: Int
    createdAt: String
    updatedAt: String
  }
  type Repo {
    id: ID
    name: String
    private: Boolean
    owner: User
    profileUrl: String
    description: String
    createdAt: String
    updatedAt: String
    publishedAt: String
    language: String
    openIssuesCount: Int
    License: String
  }
  type Query {
    user(username: String!): User
  }
`;

module.exports = typeDefs;
