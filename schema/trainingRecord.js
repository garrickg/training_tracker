export default `

type TrainingRecord {
    id: String!
    trainerId: String!
    traineeId: String!
    trainingDate: String!
    trainingRevision: String!
    QMSId: String!
}

type Query {
    allTrainingRecords: [TrainingRecord!]!
}

`;
