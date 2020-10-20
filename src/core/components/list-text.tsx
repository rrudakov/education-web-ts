import React, { Props } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export const BulletListItem: React.FC<Props<{}>> = (props) => {
  return (
    <ListItem>
      <ListItemIcon>
        <ArrowRightIcon />
      </ListItemIcon>
      <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
        {props.children}
      </ListItemText>
    </ListItem>
  );
};
