import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NewItemFab } from '../../core/components/fab';
import { NewPresentationPage } from './modules/create';
import { PresentationsMainPage } from './modules/main';
import { UpdatePresentationPage } from './modules/update';

export const PresentationsPage: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <PresentationsMainPage />
        <NewItemFab />
      </Route>
      <Route exact path={`${path}/new`}>
        <NewPresentationPage />
      </Route>
      <Route exact path={`${path}/:presentationId`}>
        <UpdatePresentationPage />
      </Route>
    </Switch>
  );
};
