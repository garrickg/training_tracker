export default `

type TrainingRequirement {
    id: String!
    traineeId: String!
    QMSId: String!
}

type Query {
    allTrainingRequirements: [TrainingRequirement!]!
}

`;
