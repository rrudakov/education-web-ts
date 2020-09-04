import { AppBar, Button, createStyles, Hidden, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedIn } from '../selector';
import { thunkLogout } from '../thunks';
import { OPEN_AUTH } from '../types';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: spacing(2),
    },
    title: {
      flexGrow: 1,
      marginLeft: spacing(2),
    },
  }),
);

export const TopBar: React.FC = () => {
  const classes = useStyles();
  const loggedIn = useSelector(getLoggedIn);
  const dispatch = useDispatch();
  const openAuth = useCallback(() => dispatch({ type: OPEN_AUTH }), [dispatch]);
  const logout = useCallback(() => dispatch(thunkLogout()), [dispatch]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden lgUp>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <ChildCareIcon />
          <Typography variant="h6" className={classes.title}>
            Аленкина школа
          </Typography>
          {loggedIn
            ? <Button color="inherit" onClick={logout}>Выход</Button>
            : <Button color="inherit" onClick={openAuth}>Вход</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
