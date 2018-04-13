export default `

type User {
    id: String!
    username: String!
    email: String!
    admin: Boolean!
    active: Boolean!
    trainingRecords: [TrainingRecord!]!
    trainingRequirements: [TrainingRequirement!]!
    author: [QMSProcedure!]!
    trainer: [QMSProcedure!]!
    reviewer: [QMSProcedure!]!
}

type Query {
    allUsers: [User!]!
}

type Mutation {
    addUser (username: String!, email: String!, password: String!): Response!
    addTrainingRequirement (userId: String!, QMSProcedureId: String!): Response!
    addTrainingRecord (trainerId: String!, traineeId: String!, date: String!, revision: String!, QMSProcedureId: String!): Response!
}

`;
