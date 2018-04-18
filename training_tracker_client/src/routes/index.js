import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Users from '../components/user/Users';
import Procedures from '../components/procedure/Procedures';
import Trainers from '../components/trainer/Trainers';

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
      <Route path="/trainers" exact component={Trainers} />
    </Switch>
  </BrowserRouter>
);
