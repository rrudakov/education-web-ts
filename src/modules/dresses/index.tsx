import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { DressesMainPage } from './modules/main';

export const DressesPage: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <DressesMainPage />
      </Route>
    </Switch>
  );
};
