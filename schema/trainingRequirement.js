export default `

type TrainingRequirement {
    id: String!
    user: User!
    QMSProcedure: QMSProcedure!
}

type Query {
    getTrainingRequirementsByUser (userId: String!): [TrainingRequirement!]!
    getTrainingRequirementsById (id: String!): TrainingRequirement!
    getTrainingRequirementsByQMS (QMSProcedureId: String!): [TrainingRequirement!]!
}

`;
