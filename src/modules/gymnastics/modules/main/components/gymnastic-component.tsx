import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  Grid,
  Grow,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { getTransitioning, getUser } from '../../../../../core/selector';
import { getGymnasticNameBySubtypeId } from '../../../../../core/utils/helpers';
import { isAdmin, isModerator } from '../../../../../core/utils/user';
import { Gymnastic } from '../../../reducer';
import { thunkDeleteGymnasticById } from '../thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
    },
    media: {
      padding: spacing(4),
    },
  })
);

export interface GymnasticComponentProps {
  gymnastic: Gymnastic;
}

export const GymnasticComponent: React.FC<GymnasticComponentProps> = ({
  gymnastic,
}) => {
  const classes = useStyles();
  const gymnasticType = getGymnasticNameBySubtypeId(gymnastic.subtype_id);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { url } = useRouteMatch();
  const transitioning = useSelector(getTransitioning);
  const [show, setShow] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const deleteGymnastic = useCallback(
    (gymnasticId: number) => {
      dispatch(thunkDeleteGymnasticById(gymnasticId));
      closeMenu();
    },
    [dispatch]
  );

  const handleImageLoaded = (
    _: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setImageLoaded(true);
  };

  useEffect(
    () =>
      setShow(
        !transitioning &&
          (gymnastic.picture === undefined ||
            gymnastic.picture === null ||
            imageLoaded)
      ),
    [transitioning, imageLoaded, gymnastic]
  );

  return (
    <Grid className={classes.root} item sm={12} md={6}>
      <Grow in={show} timeout={500}>
        <Card>
          <CardHeader
            title={gymnastic.title}
            subheader={gymnasticType}
            action={
              user !== undefined &&
              (isAdmin(user) || isModerator(user)) && (
                <IconButton
                  aria-label="settings"
                  aria-controls="gymnastic-menu"
                  aria-haspopup={true}
                  onClick={openMenu}
                >
                  <MoreVertIcon />
                </IconButton>
              )
            }
          />
          <Menu
            id="gymnastic-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={closeMenu}
          >
            <MenuItem component={Link} to={`${url}/${gymnastic.id}`}>
              Редактировать
            </MenuItem>
            <MenuItem onClick={() => deleteGymnastic(gymnastic.id)}>
              Удалить
            </MenuItem>
          </Menu>
          <CardContent>
            <Typography
              paragraph
              color="textSecondary"
              align="justify"
              style={{ whiteSpace: 'pre-line' }}
            >
              {gymnastic.description}
            </Typography>
          </CardContent>
          {gymnastic.picture !== undefined && gymnastic.picture !== null && (
            <CardMedia
              className={classes.media}
              component="img"
              image={gymnastic.picture}
              onLoad={handleImageLoaded}
              height="100%"
            />
          )}
        </Card>
      </Grow>
    </Grid>
  );
};
