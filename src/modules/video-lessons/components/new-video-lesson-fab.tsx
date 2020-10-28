import { createStyles, Fab, makeStyles, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { getLoggedIn, getUser } from '../../../core/selector';
import { isAdmin, isModerator } from '../../../core/utils/user';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    fab: {
      margin: 0,
      top: 'auto',
      right: spacing(2),
      bottom: spacing(2),
      left: 'auto',
      position: 'fixed',
    },
  })
);

export const NewVideoLessonFab: React.FC = () => {
  const {url} = useRouteMatch();
  const classes = useStyles();
  const user = useSelector(getUser);
  const loggedIn = useSelector(getLoggedIn);

  if (loggedIn && user !== undefined && (isAdmin(user) || isModerator(user))) {
    return (
      <Fab
        className={classes.fab}
        color="primary"
        aria-label="add"
        component={RouterLink}
        to={`${url}/new`}
      >
        <AddIcon />
      </Fab>
    );
  } else {
    return <div />;
  }
};
