export default `

type QMSProcedure {
    id: String!
    name: String!
    number: String!
    revision: String!
    effectiveDate: String!
    obsolete: Boolean!
    trainer: [Trainer!]!
    author: [Author!]!
    reviewer: [Reviewer!]!
    trainingRecords: [TrainingRecord!]!
    trainingRequirements: [TrainingRequirement!]!
}

type Query {
    allQMSProcedures: [QMSProcedure!]!
    procedure (QMSProcedureId: String!): QMSProcedure!
}

type Mutation {
    addQMSProcedure(name: String!, number: String!, revision: String!, effectiveDate: String!): Response!
    addAuthor(userId: String!, QMSProcedureId: String!): Response!
    addReviewer(userId: String!, QMSProcedureId: String!): Response!
    addTrainer(userId: String!, QMSProcedureId: String!): Response!
}

`;
