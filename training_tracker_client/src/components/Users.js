import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

import UserDetails from './UserDetails';
import UserList from './UserList';

const Wrapper = styled.div`
  padding: 20px;
`;

class Users extends Component {
    state = {
      selectedUser: '',
    };

    onChange = (e, { value }) => {
      this.setState({
        selectedUser: value,
      });
    }

    render() {
      const { selectedUser } = this.state;

      return (
        <React.Fragment>
          <Wrapper>
            <Header as="h1">Training Records by User</Header>
          </Wrapper>
          <Wrapper>
            <UserList onUserSelected={this.onChange} />
          </Wrapper>
          <Wrapper>
            <UserDetails userId={selectedUser} />
          </Wrapper>
        </React.Fragment>

      );
    }
}

export default Users;
