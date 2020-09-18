import React, { useCallback } from 'react';
import { Drawer, ListItem, ListItemText, makeStyles, createStyles, Theme, Divider, Collapse, List } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getMenuItems, getMenuDrawerOpen } from '../selector';
import { TOGGLE_MENU_DRAWER } from '../types';
import { SiteMenuItem } from '../reducer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    drawer: {
      background: palette.primary.light,
    },
    nested: {
      paddingLeft: spacing(4),
    },
  }));

export const MenuDrawer: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const menuItems = useSelector(getMenuItems);
  const menuDrawerOpen = useSelector(getMenuDrawerOpen);
  const toggleMenuDrawer = useCallback(() => dispatch({ type: TOGGLE_MENU_DRAWER }), [dispatch]);

  return (
    <Drawer classes={{ paper: classes.drawer }} anchor="left" open={menuDrawerOpen} onClose={toggleMenuDrawer}>
      <div className={classes.list} role="presentation" >
        {menuItems.map((item, i) => (
          <NestedMenuComponent key={i} item={item} />
        ))}
      </div>
    </Drawer>
  )
}

interface NestedMenuProps {
  item: SiteMenuItem;
}

const NestedMenuComponent: React.FC<NestedMenuProps> = ({ item }: NestedMenuProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (item.url === undefined && item.subitems !== undefined) {
    return (
      <div>
        <ListItem button onClick={handleClick}>
          <ListItemText primary={item.name} primaryTypographyProps={{ variant: "button" }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subitems.map((subitem, i) => (
              <ListItem key={i} button className={classes.nested}>
                <ListItemText primary={subitem.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <Divider />
      </div>
    );
  } else if (item.url !== undefined && item.subitems === undefined) {
    return (
      <div>
        <ListItem button>
          <ListItemText primary={item.name} primaryTypographyProps={{ variant: "button" }} />
        </ListItem>
        <Divider />
      </div>
    );
  } else {
    return <div />
  }
}
