export default `

type TrainingRequirement {
    id: String!
    traineeId: String!
    QMSProcedureId: String!
}

type Query {
    allTrainingRequirements: [TrainingRequirement!]!
}

`;
