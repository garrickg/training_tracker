export default `

type TrainingRequirement {
    id: String!
    user: User!
    QMSProcedure: QMSProcedure!
}

type Query {
    getTrainingRequirements (userId: String!): [TrainingRequirement!]!
}

`;
