import React, { useCallback } from 'react';
import { Drawer, ListItem, ListItemText, makeStyles, createStyles, Theme } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getMenuItems, getMenuDrawerOpen } from '../selector';
import { TOGGLE_MENU_DRAWER } from '../types';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    list: {
      width: 250,

    },
    drawer: {
      background: palette.primary.light,
    }
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
        {menuItems.map((item) => (
          <ListItem button key={item.name}>
            <ListItemText primary={item.name} primaryTypographyProps={{ variant: "button" }} />
          </ListItem>
        ))}
      </div>
    </Drawer>
  )
}
