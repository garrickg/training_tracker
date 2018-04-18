import React from 'react';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Card, Header } from 'semantic-ui-react';
import moment from 'moment';

const trainerDataQuery = gql`
  query trainers($QMSProcedureId: String!) {
    procedure(QMSProcedureId: $QMSProcedureId) {
      name
      number
      id
    }
    getTrainersByQMS(QMSProcedureId: $QMSProcedureId) {
      id
      user {
        username
        email
      }
    }
  } 
`;

const TrainerDetails = ({ QMSProcedureId }) => (
  <Query query={trainerDataQuery} variables={{ QMSProcedureId }} skip={!QMSProcedureId}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      const { procedure, getTrainersByQMS: trainers } = data;

      // eslint-disable-next-line prefer-const
      let allTrainers = [...trainers];
      allTrainers.sort((a, b) => (a.user.username > b.user.username ? 1 : -1));

      return (
        <React.Fragment>
          <Header as="h3" dividing>
            {`QMS ${procedure.number} - ${procedure.name}`}
          </Header>
          <Card.Group>
            {allTrainers
                .map(trainer => (
                  <Card key={trainer.id}>
                    <Card.Content>
                      <Card.Header>{trainer.user.username}</Card.Header>
                      <Card.Description>{trainer.user.email}</Card.Description>
                    </Card.Content>
                  </Card>
            ))}
          </Card.Group>
        </React.Fragment>
      );
    }}
  </Query>
);

export default graphql(trainerDataQuery)(TrainerDetails);
