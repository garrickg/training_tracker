export default `

type User {
    id: String!
    username: String!
    email: String!
    admin: Boolean!
    active: Boolean!
    trainingRecords: [TrainingRecord!]!
    trainingRequirements: [TrainingRequirement!]!
    author: [Author!]!
    trainer: [Trainer!]!
    reviewer: [Reviewer!]!
}

type Query {
    allUsers: [User!]!
    user (userId: String!): User!
}

type Mutation {
    addUser (username: String!, email: String!, password: String!): Response!
    addTrainingRequirement (userId: String!, QMSProcedureId: String!): Response!
    addTrainingRecord (trainerId: String!, traineeId: String!, date: String!, QMSProcedureId: String!): Response!
}

`;
