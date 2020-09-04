import { Fab, makeStyles, createStyles, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { useSelector } from 'react-redux';
import { getLoggedIn, getUser } from '../selector';
import { isAdmin, isModerator } from '../utils/user';
import { Link as RouterLink } from 'react-router-dom';

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

export const NewPostFab: React.FC = () => {
  const classes = useStyles();
  const user = useSelector(getUser);
  const loggedIn = useSelector(getLoggedIn);

  if (loggedIn && user !== undefined && (isAdmin(user) || isModerator(user))) {
    return (
      <Fab className={classes.fab} color="primary" aria-label="add" component={RouterLink} to="/posts/new">
        <AddIcon />
      </Fab>
    );
  } else {
    return (
      <div />
    );
  }

}
