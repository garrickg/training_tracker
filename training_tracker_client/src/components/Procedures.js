import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
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

    render() {
      const { selectedProcedure } = this.state;

      return (
        <React.Fragment>
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
