export default `

type QMSProcedure {
    id: String!
    procedureName: String!
    procedureNumber: String!
    procedureRevision: String!
    effectiveDate: String!
    obsolete: Boolean!
}

type Query {
    allQMSProcedures: [QMSProcedure!]!
}

`;
