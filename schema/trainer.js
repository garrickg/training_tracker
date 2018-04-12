export default `

type Trainer {
    id: String!
    trainerId: String!
    QMSProcedureId: String!
}

type Query {
    allTrainers: [Trainer!]!
}

`;
