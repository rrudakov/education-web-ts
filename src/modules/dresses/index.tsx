import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NewItemFab } from '../../core/components/fab';
import { NewDressPage } from './modules/create';
import { DressesMainPage } from './modules/main';
import { UpdateDressPage } from './modules/update';

export const DressesPage: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <DressesMainPage />
        <NewItemFab />
      </Route>
      <Route exact path={`${path}/new`}>
        <NewDressPage />
      </Route>
      <Route exact path={`${path}/:dressId`}>
        <UpdateDressPage />
      </Route>
    </Switch>
  );
};
