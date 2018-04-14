export default `

type Trainer {
    id: String!
    user: User!
    QMSProcedure: QMSProcedure!
}

type Query {
    getTrainerByUser (userId: String!): [Trainer!]!
    getTrainerById (id: String!): Trainer!
    getTrainersByQMS (QMSProcedureId: String!): [Trainer!]!
}

`;
