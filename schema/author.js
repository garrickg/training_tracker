export default `

type Author {
    id: String!
    authorId: String!
    QMSProcedureId: String!
}

type Query {
    allAuthors: [Author!]!
}

type Mutation {
    addAuthor (id: String!, authorId: String!, QMSProcedureId: String!): Boolean!
}

`;
