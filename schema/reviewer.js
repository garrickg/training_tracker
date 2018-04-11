export default `

type Reviewer {
    id: String!
    userId: String!
    QMSId: String!
}

type Query {
    allReviewers: [Reviewer!]!
}

`;
