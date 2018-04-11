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
}

`;
