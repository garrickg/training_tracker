export default `

type TrainingRecord {
    id: String!
    trainer: User!
    trainee: User!
    date: String!
    revision: String!
    QMSProcedure: QMSProcedure!
}

`;
