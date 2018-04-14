export default `

type Author {
    id: String!
    user: User!
    QMSProcedure: QMSProcedure!
}

type Query {
    getAuthorByUser (userId: String!): [Author!]!
    getAuthorById (id: String!): Author!
    getAuthorsByQMS (QMSProcedureId: String!): [Author!]!
}

`;
