import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Detail from '../pages/Detail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  );
}
