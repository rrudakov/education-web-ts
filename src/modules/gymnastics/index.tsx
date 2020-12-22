import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NewItemFab } from '../../core/components/fab';
import { GYMNASTICS_SUBTYPES } from '../../core/constants';
import { NewGymnasticPage } from './modules/create';
import { GymnasticsMainPage } from './modules/main';
import { UpdateGymnasticPage } from './modules/update';

export const GymnasticsPage: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <React.Fragment>
      <NewItemFab />
      <Switch>
        <Route exact path={`${path}/new`}>
          <NewGymnasticPage />
        </Route>
        {GYMNASTICS_SUBTYPES.map((gymnastic, i) => (
          <Route key={i} exact path={gymnastic.url}>
            <GymnasticsMainPage subtypeId={gymnastic.subtypeId} />
          </Route>
        ))}
        {GYMNASTICS_SUBTYPES.map((gymnastic, i) => (
          <Route key={i} exact path={`${gymnastic.url}/:gymnasticId`}>
            <UpdateGymnasticPage />
          </Route>
        ))}
      </Switch>
    </React.Fragment>
  );
};
