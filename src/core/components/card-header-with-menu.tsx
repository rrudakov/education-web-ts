import { CardHeader, IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../selector';
import { isAdmin, isModerator } from '../utils/user';

interface CardHeaderWithMenuComponentProps {
  title: string;
  subtitle?: JSX.Element | string;
  editPath: string;
  deleteFunc: () => void;
}

export const CardHeaderWithMenuComponent: React.FC<CardHeaderWithMenuComponentProps> = ({
  title,
  subtitle,
  editPath,
  deleteFunc,
}) => {
  const user = useSelector(getUser);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openMenu = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  return (
    <React.Fragment>
      <CardHeader
        title={title}
        subheader={subtitle}
        action={
          user !== undefined &&
          (isAdmin(user) || isModerator(user)) && (
            <IconButton
              aria-label="settings"
              aria-controls="menu"
              aria-haspopup={true}
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          )
        }
      />
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={closeMenu}
      >
        <MenuItem component={Link} to={editPath}>
          Редактировать
        </MenuItem>
        <MenuItem onClick={deleteFunc}>Удалить</MenuItem>
      </Menu>
    </React.Fragment>
  );
};
