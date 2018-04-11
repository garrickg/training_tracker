export default `

type Trainer {
    id: String!
    userId: String!
    QMSId: String!
}

type Query {
    allTrainers: [Trainer!]!
}

`;
