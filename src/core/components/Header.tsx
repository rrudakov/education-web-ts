import { Button, createStyles, IconButton, Link, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import React, { useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getLoggedIn } from '../selector';
import { OPEN_AUTH } from '../types';
import { thunkLogout } from '../thunks';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    toolbar: {
      borderBottom: `1px solid ${palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: spacing(1),
      flexShrink: 0,
    }
  })
)

export interface HeaderSection {
  url: string;
  title: string;
}

export interface HeaderProps {
  title: string;
  sections: HeaderSection[];
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const classes = useStyles();
  const loggedIn = useSelector(getLoggedIn);
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
        <Typography component="h2" variant="h5" color="inherit" align="center" noWrap={true} className={classes.toolbarTitle}>
          {props.title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {loggedIn
          ? <Button variant="outlined" size="small" onClick={logout}>Log out</Button>
          : <Button variant="outlined" size="small" onClick={openAuth}>Log in</Button>}
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {props.sections.map((section) => (
          <Link color="inherit" noWrap={true} key={section.title} variant="body2" href={section.url} className={classes.toolbarLink}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  )
}
