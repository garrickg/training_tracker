import React from 'react';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Card, Header } from 'semantic-ui-react';
import moment from 'moment';

const userDataQuery = gql`
    query user($userId: String!) {
        user(userId: $userId) {
            username
            email
        }
        getTrainingRecordsByUser(userId: $userId) {
            id
            trainer {
                username
            }
            date
            QMSProcedure{
                name
                number
                revision
            }
        }
    }  
`;

const UserDetails = ({ userId }) => (
  <Query query={userDataQuery} variables={{ userId }} skip={!userId}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      const { user, getTrainingRecordsByUser: records } = data;

      // eslint-disable-next-line prefer-const
      let allRecords = [...records];
      allRecords.sort((a, b) => (a.QMSProcedure.number > b.QMSProcedure.number ? 1 : -1));

      return (
        <React.Fragment>
          <Header as="h3" dividing>
            {user.username}
          </Header>
          <Card.Group>
            {allRecords
                .map(record => (
                  <Card key={record.id}>
                    <Card.Content>
                      <Card.Header>{record.QMSProcedure.name}</Card.Header>
                      <Card.Meta>{`QMS-${record.QMSProcedure.number}`}</Card.Meta>
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

export default graphql(userDataQuery)(UserDetails);
