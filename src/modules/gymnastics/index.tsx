import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NewItemFab } from '../../core/components/fab';
import { NewGymnasticPage } from './modules/create';

export const GymnasticsPage: React.FC = () => {
  const { path } = useRouteMatch();
  console.log(path);

  return (
    <React.Fragment>
      <NewItemFab />
      <Switch>
        <Route exact path={`${path}/fingers`}>
          <h1>Fingers</h1>
        </Route>
        <Route exact path={`${path}/art`}>
          <h1>Art</h1>
        </Route>
        <Route exact path={`${path}/breath`}>
          <h1>Breate</h1>
        </Route>
        <Route exact path={`${path}/sport`}>
          <h1>Sport</h1>
        </Route>
        <Route exact path={`${path}/kinesiology`}>
          <h1>Kinesiology</h1>
        </Route>
        <Route exact path={`${path}/new`}>
          <NewGymnasticPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
};
