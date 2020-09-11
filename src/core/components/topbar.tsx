import { AppBar, Button, createStyles, Hidden, IconButton, makeStyles, Theme, Toolbar, Typography, Link } from '@material-ui/core';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedIn, getMenuItems } from '../selector';
import { thunkLogout } from '../thunks';
import { OPEN_AUTH, TOGGLE_MENU_DRAWER } from '../types';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
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
    appBar: {
      background: palette.grey[200],
    },
    appBarSecondary: {
      background: palette.primary.light,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: spacing(1),
      flexShrink: 0,
    },
  }),
);

export const TopBar: React.FC = () => {
  const classes = useStyles();
  const loggedIn = useSelector(getLoggedIn);
  const menuItems = useSelector(getMenuItems);
  const dispatch = useDispatch();
  const openAuth = useCallback(() => dispatch({ type: OPEN_AUTH }), [dispatch]);
  const logout = useCallback(() => dispatch(thunkLogout()), [dispatch]);
  const toggleMenuDrawer = useCallback(() => dispatch({ type: TOGGLE_MENU_DRAWER }), [dispatch]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Hidden lgUp>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleMenuDrawer}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <ChildCareIcon />
          <Typography variant="h6" className={classes.title}>
            Аленкина сказка
          </Typography>
          {loggedIn
            ? <Button color="inherit" onClick={logout}>Выход</Button>
            : <Button color="inherit" onClick={openAuth}>Вход</Button>}
        </Toolbar>
      </AppBar>
      <Hidden mdDown>
        <AppBar position="static" className={classes.appBarSecondary}>
          <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            {menuItems.map((menuItem) => (
              <Link
                className={classes.toolbarLink}
                color="inherit"
                noWrap={true}
                key={menuItem.name}
                variant="button"
                component={RouterLink}
                to={menuItem.url}
              >
                {menuItem.name}
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </Hidden>
    </div>
  );
}
