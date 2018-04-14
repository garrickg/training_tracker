export default `

type TrainingRecord {
    id: String!
    trainer: User!
    trainee: User!
    date: String!
    revision: String!
    QMSProcedure: QMSProcedure!
}

type Query {
    getTrainingRecordsByUser (userId: String!): [TrainingRecord!]!
    getTrainingRecordsById (id: String!): TrainingRecord!
    getTrainingRecordsByQMS (QMSProcedureId: String!): [TrainingRecord!]!
}

type Mutation {
    bulkAddTrainingRecords (trainerId: String!, traineeIds: [String!]!, date: String!, revision: String!, QMSProcedureId: String!): Response!
}

`;
