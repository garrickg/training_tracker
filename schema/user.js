export default `

type User {
    id: String!
    username: String!
    email: String!
    admin: Boolean!
    active: Boolean!
}

type Query {
    allUsers: [User!]!
    getTrainer (userId: String!): [QMSProcedure!]
    getAuthor (userId: String!): [QMSProcedure!]
    getReviewer (userId: String!): [QMSProcedure!]
}

type Mutation {
    addUser (username: String!, email: String!, password: String!): Boolean!
}

`;
