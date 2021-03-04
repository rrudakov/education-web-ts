import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NewItemFab } from '../../core/components/fab';
import { PRESENTATIONS_SUBTYPES } from '../../core/constants';
import { NewPresentationPage } from './modules/create';
import { PresentationsMainPage } from './modules/main';
import { UpdatePresentationPage } from './modules/update';

export const PresentationsPage: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <React.Fragment>
      <NewItemFab />
      <Switch>
        <Route exact path={`${path}/new`}>
          <NewPresentationPage />
        </Route>
        {PRESENTATIONS_SUBTYPES.map((presentation, i) => (
          <Route key={i} exact path={presentation.url}>
            <PresentationsMainPage subtypeId={presentation.subtypeId} />
          </Route>
        ))}
        {PRESENTATIONS_SUBTYPES.map((presentation, i) => (
          <Route key={i} exact path={`${presentation.url}/:presentationId`}>
            <UpdatePresentationPage />
          </Route>
        ))}
      </Switch>
    </React.Fragment>
  );
};
