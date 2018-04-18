import React, { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react';
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

    handleItemClick = (e, { name }) => this.props.history.push(`/${name}s`);

    render() {
      const { selectedUser } = this.state;

      return (
        <React.Fragment>
          <Menu pointing secondary>
            <Menu.Item name="user" active="true" onClick={this.handleItemClick} />
            <Menu.Item name="procedure" onClick={this.handleItemClick} />
            <Menu.Item name="trainer" onClick={this.handleItemClick} />
          </Menu>
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
