export default `

type Reviewer {
    id: String!
    user: User!
    QMSProcedure: QMSProcedure!
}

type Query {
    getReviewerByUser (userId: String!): [Reviewer!]!
    getReviewerById (id: String!): Reviewer!
    getReviewersByQMS (QMSProcedureId: String!): [Reviewer!]!
}

`;
