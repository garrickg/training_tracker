export default `

type Reviewer {
    id: String!
    reviewerId: String!
    QMSProcedureId: String!
}

type Query {
    allReviewers: [Reviewer!]!
}

`;
