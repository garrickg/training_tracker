import React from 'react';
import gql from 'graphql-tag';
import { graphql, Query } from 'react-apollo';
import { Dropdown } from 'semantic-ui-react';

const allQMSProceduresQuery = gql`
  {
    allQMSProcedures {
      name
      number
      id
    }
  }
`;

const TrainerList = ({ onProcedureSelected }) => (
  <Query query={allQMSProceduresQuery}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      const allQMSProcedures = [];
      data.allQMSProcedures.forEach((procedure) => {
        allQMSProcedures.push({
          text: `QMS-${procedure.number} ${procedure.name}`,
          value: procedure.id,
        });
      });

      return (
        <Dropdown placeholder="Select Procedure" fluid selection options={allQMSProcedures} onChange={onProcedureSelected} />
      );
    }}
  </Query>
);

export default graphql(allQMSProceduresQuery)(TrainerList);
