import { Button, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SearchIcon from '@material-ui/icons/Search';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { getLoggedIn, getUser } from '../selector';
import { thunkLogout } from '../thunks';
import { OPEN_AUTH } from '../types';
import { isAdmin, isModerator } from '../utils/user';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    toolbar: {
      borderBottom: `1px solid ${palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    newPostButton: {
      marginRight: 10,
    },
  })
);

export const Header: React.FC = () => {
  const classes = useStyles();
  const loggedIn = useSelector(getLoggedIn);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const openAuth = useCallback(() => dispatch({ type: OPEN_AUTH }), [dispatch]);
  const logout = useCallback(() => dispatch(thunkLogout()), [dispatch]);
  const location = useLocation();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {location.pathname !== "/" &&
          <Button
            size="small"
            startIcon={<NavigateBeforeIcon />}
            component={RouterLink}
            to="/"
          >
            Home
         </Button>}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap={true}
          className={classes.toolbarTitle}
        >
          Education portal
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {loggedIn && user !== undefined && (isAdmin(user) || isModerator(user)) &&
          <Button
            className={classes.newPostButton}
            variant="outlined"
            size="small"
            component={RouterLink}
            to="/posts/new"
          >
            New post
         </Button>}
        {loggedIn
          ? <Button variant="outlined" size="small" onClick={logout}>Log out</Button>
          : <Button variant="outlined" size="small" onClick={openAuth}>Log in</Button>}
      </Toolbar>
    </React.Fragment>
  )
}
