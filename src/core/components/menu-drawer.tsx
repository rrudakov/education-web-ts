import {
  Collapse,
  createStyles,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { SiteMenuItem } from '../reducer';
import { getMenuDrawerOpen, getMenuItems } from '../selector';
import { TOGGLE_MENU_DRAWER } from '../types';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    menu: {
      width: 250,
    },
    drawer: {
      background: palette.primary.light,
    },
    nested: {
      paddingLeft: spacing(4),
    },
  })
);

export const MenuDrawer: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const menuItems = useSelector(getMenuItems);
  const menuDrawerOpen = useSelector(getMenuDrawerOpen);
  const toggleMenuDrawer = useCallback(
    () => dispatch({ type: TOGGLE_MENU_DRAWER }),
    [dispatch]
  );

  return (
    <Drawer
      classes={{ paper: classes.drawer }}
      anchor="left"
      open={menuDrawerOpen}
      onClose={toggleMenuDrawer}
    >
      <div className={classes.menu} role="presentation">
        {menuItems.map((item, i) => (
          <NestedMenuComponent key={i} item={item} />
        ))}
      </div>
    </Drawer>
  );
};

interface ListItemLinkProps {
  text: string;
  to: string;
}

const ListItemLink: React.FC<ListItemLinkProps> = ({
  text,
  to,
}: ListItemLinkProps) => {
  const dispatch = useDispatch();
  const toggleMenuDrawer = useCallback(
    () => dispatch({ type: TOGGLE_MENU_DRAWER }),
    [dispatch]
  );
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <ListItem button component={renderLink} onClick={toggleMenuDrawer}>
      <ListItemText
        primary={text}
        primaryTypographyProps={{ variant: 'button' }}
      />
    </ListItem>
  );
};

const NestedListItemLink: React.FC<ListItemLinkProps> = ({
  text,
  to,
}: ListItemLinkProps) => {
  const dispatch = useDispatch();
  const toggleMenuDrawer = useCallback(
    () => dispatch({ type: TOGGLE_MENU_DRAWER }),
    [dispatch]
  );
  const classes = useStyles();
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem
        button
        component={renderLink}
        className={classes.nested}
        onClick={toggleMenuDrawer}
      >
        <ListItemText primary={text} />
      </ListItem>
    </li>
  );
};

interface NestedMenuProps {
  item: SiteMenuItem;
}

const NestedMenuComponent: React.FC<NestedMenuProps> = ({
  item,
}: NestedMenuProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (item.url === undefined && item.subitems !== undefined) {
    return (
      <div>
        <ListItem button onClick={handleClick}>
          <ListItemText
            primary={item.name}
            primaryTypographyProps={{ variant: 'button' }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subitems.map(
              (subitem, i) =>
                subitem.url !== undefined && (
                  <NestedListItemLink
                    key={i}
                    to={subitem.url}
                    text={subitem.name}
                  >
                    {subitem.name}
                  </NestedListItemLink>
                )
            )}
          </List>
        </Collapse>
        <Divider />
      </div>
    );
  } else if (item.url !== undefined && item.subitems === undefined) {
    return (
      <div>
        <ListItemLink to={item.url} text={item.name} />
        <Divider />
      </div>
    );
  } else {
    return <div />;
  }
};
