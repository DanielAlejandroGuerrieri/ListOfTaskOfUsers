const { gql } = require('apollo-server-express');


// User and Task SchemaTypeDefs
module.exports = gql ` 
    extend type Query{
        users: [User!]
        user(id: ID!): User
    }

    type User{
        id: ID!
        name: String!
        email:String!
        tasks: [Task!]
    }

`;