import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import React, { Props } from 'react';

export const BulletListItem: React.FC<Props<{}>> = (props) => {
  return (
    <ListItem>
      <ListItemIcon>
        <ArrowRightIcon />
      </ListItemIcon>
      <ListItemText
        primaryTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
      >
        {props.children}
      </ListItemText>
    </ListItem>
  );
};
