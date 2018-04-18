import React from 'react';
import gql from 'graphql-tag';
import { graphql, Query } from 'react-apollo';
import { Dropdown } from 'semantic-ui-react';

const allUsersQuery = gql`
  {
    allUsers {
      username
      id
    }
  }
`;

const UserList = ({ onUserSelected }) => (
  <Query query={allUsersQuery}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      const allUsers = [];
      data.allUsers.forEach((user) => {
        allUsers.push({
          text: user.username,
          value: user.id,
        });
      });

      return (
        <Dropdown placeholder="Select User" fluid selection options={allUsers} onChange={onUserSelected} />
      );
    }}
  </Query>
);

export default graphql(allUsersQuery)(UserList);
