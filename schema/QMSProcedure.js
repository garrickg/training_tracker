export default `

type QMSProcedure {
    id: String!
    name: String!
    number: String!
    revision: String!
    effectiveDate: String!
    obsolete: Boolean!
    trainer: [User!]!
    author: [User!]!
    reviewer: [User!]!
}

type Query {
    allQMSProcedures: [QMSProcedure!]!
}

type Mutation {
    addQMSProcedure(name: String!, number: String!, revision: String!, effectiveDate: String!): Response!
    addAuthor(userId: String!, QMSProcedureId: String!): Response!
    addReviewer(userId: String!, QMSProcedureId: String!): Response!
    addTrainer(userId: String!, QMSProcedureId: String!): Response!
}

`;
