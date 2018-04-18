import React, { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

import ProcedureDetails from './ProcedureDetails';
import ProcedureList from './ProcedureList';

const Wrapper = styled.div`
  padding: 20px;
`;

class Procedures extends Component {
    state = {
      selectedProcedure: '',
    };

    onChange = (e, { value }) => {
      this.setState({
        selectedProcedure: value,
      });
    }

    handleItemClick = (e, { name }) => this.props.history.push(`/${name}s`);

    render() {
      const { selectedProcedure } = this.state;

      return (
        <React.Fragment>
          <Menu pointing secondary>
            <Menu.Item name="user" onClick={this.handleItemClick} />
            <Menu.Item name="procedure" active="true" onClick={this.handleItemClick} />
            <Menu.Item name="trainer" onClick={this.handleItemClick} />
          </Menu>
          <Wrapper>
            <Header as="h1">Training Records by Procedure</Header>
          </Wrapper>
          <Wrapper>
            <ProcedureList onProcedureSelected={this.onChange} />
          </Wrapper>
          <Wrapper>
            <ProcedureDetails QMSProcedureId={selectedProcedure} />
          </Wrapper>
        </React.Fragment>

      );
    }
}

export default Procedures;
