import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { WHATSAPP_LINK } from '../../../../../core/constants';
import { getTransitioning, getUser } from '../../../../../core/selector';
import { isAdmin, isModerator } from '../../../../../core/utils/user';
import { updateCurrentPresentationActionCreator } from '../../../actions';
import { Presentation } from '../../../reducer';
import { thunkDeletePresentationById } from '../thunks';

const useStyles = makeStyles(({ spacing, transitions }: Theme) =>
  createStyles({
    card: {
      marginBottom: spacing(2),
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: transitions.create('transform', {
        duration: transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    media: {
      padding: spacing(4),
    },
  })
);

export const PresentationComponent: React.FC<Presentation> = (presentation) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openCurrentPresentationModal = useCallback(
    () => dispatch(updateCurrentPresentationActionCreator(presentation)),
    [dispatch, presentation]
  );
  const user = useSelector(getUser);
  const route = useRouteMatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const transitioning = useSelector(getTransitioning);
  const [show, setShow] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  const handleImageLoaded = (
    _: React.SyntheticEvent<HTMLImageElement, Event>
  ) => setImageLoaded(true);

  useEffect(
    () =>
      setShow(
        !transitioning && (presentation.preview === undefined || imageLoaded)
      ),
    [transitioning, imageLoaded, presentation]
  );

  return (
    <Grid item sm={12} md={6}>
      <Grow in={show} timeout="auto">
        <Card className={classes.card}>
          <CardHeader
            title={presentation.title}
            subheader={
              presentation.is_public ? (
                <Chip size="small" label="Бесплатно" color="secondary" />
              ) : (
                <Chip size="small" color="secondary" label="Платный контент" />
              )
            }
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
            <MenuItem component={Link} to={`${route.url}/${presentation.id}`}>
              Редактировать
            </MenuItem>
            <MenuItem onClick={() => deletePresentation(presentation.id)}>
              Удалить
            </MenuItem>
          </Menu>
          <CardContent>
            {presentation.preview !== undefined && (
              <CardMedia
                className={classes.media}
                component="img"
                image={presentation.preview}
                onLoad={handleImageLoaded}
                height="100%"
              />
            )}
            <Collapse in={expanded} collapsedHeight={120}>
              <Typography
                paragraph
                color="textSecondary"
                align="justify"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {presentation.description}
              </Typography>
            </Collapse>
          </CardContent>
          <CardActions>
            {presentation.is_public ? (
              <Button
                variant="contained"
                color="primary"
                onClick={openCurrentPresentationModal}
              >
                Открыть
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                startIcon={<WhatsAppIcon />}
                component="a"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </Button>
            )}
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
          </CardActions>
        </Card>
      </Grow>
    </Grid>
  );
};
