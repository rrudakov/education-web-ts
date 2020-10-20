import React from 'react';
import { makeStyles, Theme, createStyles, Fab } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getUser, getLoggedIn } from '../../../core/selector';
import { isModerator, isAdmin } from '../../../core/utils/user';
import { Link as RouterLink } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

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
        to="/video-lessons/new"
      >
        <AddIcon />
      </Fab>
    );
  } else {
    return <div />;
  }
};
