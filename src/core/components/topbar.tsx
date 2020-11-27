import {
  AppBar,
  Button,
  createStyles,
  Hidden,
  IconButton,
  Link,
  makeStyles,
  Menu,
  MenuItem,
  MenuProps,
  Theme,
  Toolbar,
  withStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SchoolIcon from '@material-ui/icons/School';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { SiteMenuItem } from '../reducer';
import { getLoggedIn, getMenuItems } from '../selector';
import { thunkLogout } from '../thunks';
import { OPEN_AUTH, TOGGLE_MENU_DRAWER } from '../types';

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
    menuItemLink: {
      textDecoration: 'none',
      color: palette.text.primary,
    },
  })
);

export const TopBar: React.FC = () => {
  const classes = useStyles();
  const loggedIn = useSelector(getLoggedIn);
  const menuItems = useSelector(getMenuItems);
  const dispatch = useDispatch();
  const openAuth = useCallback(() => dispatch({ type: OPEN_AUTH }), [dispatch]);
  const logout = useCallback(() => dispatch(thunkLogout()), [dispatch]);
  const toggleMenuDrawer = useCallback(
    () => dispatch({ type: TOGGLE_MENU_DRAWER }),
    [dispatch]
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleMenuDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <SchoolIcon />

          <Link
            variant="h6"
            style={{ textDecoration: 'none' }}
            color="textPrimary"
            className={classes.title}
            component={RouterLink}
            to="/"
          >
            Аленкина сказка
          </Link>
          {loggedIn ? (
            <Button color="inherit" onClick={logout}>
              Выход
            </Button>
          ) : (
            <Button color="inherit" onClick={openAuth}>
              Вход
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Hidden mdDown>
        <AppBar position="static" className={classes.appBarSecondary}>
          <Toolbar
            component="nav"
            variant="dense"
            className={classes.toolbarSecondary}
          >
            {menuItems.map((menuItem, i) => (
              <DropdownMenuComponent key={i} item={menuItem} idx={i} />
            ))}
          </Toolbar>
        </AppBar>
      </Hidden>
    </div>
  );
};

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.primary.light,
      },
    },
  },
}))(MenuItem);

interface DropdownMenuProps {
  item: SiteMenuItem;
  idx: number;
}

const DropdownMenuComponent: React.FC<DropdownMenuProps> = ({
  item,
  idx,
}: DropdownMenuProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorE1] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
  };

  if (item.url === undefined && item.subitems !== undefined) {
    return (
      <div>
        <Button
          aria-controls={`menuItem${idx}`}
          aria-haspopup="true"
          onClick={handleClick}
        >
          {item.name}
        </Button>
        <StyledMenu
          id={`menuItem${idx}`}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {item.subitems.map(
            (subitem, i) =>
              subitem.url !== undefined && (
                <StyledMenuItem key={i} onClick={handleClose}>
                  <RouterLink to={subitem.url} className={classes.menuItemLink}>
                    {subitem.name}
                  </RouterLink>
                </StyledMenuItem>
              )
          )}
        </StyledMenu>
      </div>
    );
  } else if (item.url !== undefined && item.subitems === undefined) {
    return (
      <Button
        className={classes.toolbarLink}
        color="inherit"
        component={RouterLink}
        to={item.url}
      >
        {item.name}
      </Button>
    );
  } else {
    return <div />;
  }
};
