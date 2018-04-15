import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Users from '../components/Users';
import Procedures from '../components/Procedures';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <Redirect to="/users" />
      )}
      />
      <Route path="/users" exact component={Users} />
      <Route path="/procedures" exact component={Procedures} />
    </Switch>
  </BrowserRouter>
);
