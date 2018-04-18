import React, { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

import TrainerDetails from './TrainerDetails';
import TrainerList from './TrainerList';

const Wrapper = styled.div`
  padding: 20px;
`;

class Trainer extends Component {
    state = {
      selectedQMSProcedure: '',
    };

    onChange = (e, { value }) => {
      this.setState({
        selectedQMSProcedure: value,
      });
    }

    handleItemClick = (e, { name }) => this.props.history.push(`/${name}s`);

    render() {
      const { selectedQMSProcedure } = this.state;

      return (
        <React.Fragment>
          <Menu pointing secondary>
            <Menu.Item name="user" onClick={this.handleItemClick} />
            <Menu.Item name="procedure" onClick={this.handleItemClick} />
            <Menu.Item name="trainer" active="true" onClick={this.handleItemClick} />
          </Menu>
          <Wrapper>
            <Header as="h1">Trainers by QMS Procedure</Header>
          </Wrapper>
          <Wrapper>
            <TrainerList onProcedureSelected={this.onChange} />
          </Wrapper>
          <Wrapper>
            <TrainerDetails QMSProcedureId={selectedQMSProcedure} />
          </Wrapper>
        </React.Fragment>

      );
    }
}

export default Trainer;
