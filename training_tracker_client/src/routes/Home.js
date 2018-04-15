import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Home = ({ data: { allUsers = [] } }) =>
  allUsers.map(user => <h2 key={user.id}>{user.username} - {user.email}</h2>);

const allUsersQuery = gql`
  {
    allUsers {
      username
      email
      id
    }
  }
`;

export default graphql(allUsersQuery)(Home);
