export default `

type TrainingRecord {
    id: String!
    trainerId: String!
    traineeId: String!
    trainingDate: String!
    trainingRevision: String!
    QMSProcedureId: String!
}

type Query {
    allTrainingRecords: [TrainingRecord!]!
}

`;
