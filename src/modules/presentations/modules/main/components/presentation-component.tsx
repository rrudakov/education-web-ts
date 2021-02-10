import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  Grow,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { getTransitioning, getUser } from '../../../../../core/selector';
import { isAdmin, isModerator } from '../../../../../core/utils/user';
import { Presentation } from '../../../reducer';
import { thunkDeletePresentationById } from '../thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    card: {
      marginBottom: spacing(2),
    },
    videoWrapper: {
      position: 'relative',
      paddingBottom: '58.8%',
    },
    iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  })
);

export const PresentationComponent: React.FC<Presentation> = ({
  id,
  title,
  url,
  description,
}: Presentation) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const route = useRouteMatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const transitioning = useSelector(getTransitioning);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const deletePresentation = useCallback(
    (presentationId: number) => {
      dispatch(thunkDeletePresentationById(presentationId));
      closeMenu();
    },
    [dispatch]
  );

  return (
    <Grow in={!transitioning} timeout="auto">
      <Card className={classes.card}>
        <CardHeader
          title={title}
          action={
            user !== undefined &&
            (isAdmin(user) || isModerator(user)) && (
              <IconButton
                aria-label="settings"
                aria-controls="presentation-menu"
                aria-haspopup={true}
                onClick={openMenu}
              >
                <MoreVertIcon />
              </IconButton>
            )
          }
        />
        <Menu
          id="presentation-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={closeMenu}
        >
          <MenuItem component={Link} to={`${route.url}/${id}`}>
            Редактировать
          </MenuItem>
          <MenuItem onClick={() => deletePresentation(id)}>Удалить</MenuItem>
        </Menu>
        <CardContent>
          <div className={classes.videoWrapper}>
            <iframe
              className={classes.iframe}
              src={url}
              title={title}
              frameBorder={0}
              allowFullScreen
            ></iframe>
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            Описание
          </Typography>
          <Typography
            paragraph
            color="textSecondary"
            align="justify"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grow>
  );
};
