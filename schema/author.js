export default `

type Author {
    id: String!
    userId: String!
    QMSId: String!
}

type Query {
    allAuthors: [Author!]!
}

`;
