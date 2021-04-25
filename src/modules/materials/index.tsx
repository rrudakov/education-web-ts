import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NewItemFab } from '../../core/components/fab';
import { NewDownloadMaterialPage } from './modules/create';
import { DownloadMatirialsMainPage } from './modules/main';
import { UpdateDownloadMaterialPage } from './modules/update';

export const DownloadMaterialsPage: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <DownloadMatirialsMainPage />
        <NewItemFab />
      </Route>
      <Route exact path={`${path}/new`}>
        <NewDownloadMaterialPage />
      </Route>
      <Route exact path={`${path}/:materialId`}>
        <UpdateDownloadMaterialPage />
      </Route>
    </Switch>
  );
};
