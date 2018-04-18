import React from 'react';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Card, Header } from 'semantic-ui-react';
import moment from 'moment';

const ProcedureDataQuery = gql`
    query procedure($QMSProcedureId: String!) {
        procedure(QMSProcedureId: $QMSProcedureId) {
            name
            number
            revision
            effectiveDate
            trainer {
                user {
                    username
                }
            }
        }
        getTrainingRecordsByQMS(QMSProcedureId: $QMSProcedureId) {
            id
            trainer {
                username
            }
            trainee {
                username
            }
            date
        }
    }
`;

const ProcedureDetails = ({ QMSProcedureId }) => (
  <Query query={ProcedureDataQuery} variables={{ QMSProcedureId }} skip={!QMSProcedureId}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      const { procedure, getTrainingRecordsByQMS: records } = data;

      // eslint-disable-next-line prefer-const
      let allRecords = [...records];
      allRecords.sort((a, b) => (a.trainee.username > b.trainee.username ? 1 : -1));

      return (
        <React.Fragment>
          <Header as="h3" dividing>
            {`QMS-${procedure.number} ${procedure.name}`}
          </Header>
          <Card.Group>
            {records
                .map(record => (
                  <Card key={record.id}>
                    <Card.Content>
                      <Card.Header>{record.trainee.username}</Card.Header>
                      <Card.Description>{`Trained by ${record.trainer.username} on ${moment(record.date).format('YYYY-MMM-DD')}`}</Card.Description>
                    </Card.Content>
                  </Card>
            ))}
          </Card.Group>
        </React.Fragment>
      );
    }}
  </Query>
);

export default graphql(ProcedureDataQuery)(ProcedureDetails);
