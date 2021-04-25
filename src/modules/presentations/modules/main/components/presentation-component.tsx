import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Collapse,
  createStyles,
  Grid,
  Grow,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PictureAsPdfRoundedIcon from '@material-ui/icons/PictureAsPdfRounded';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { CardHeaderWithMenuComponent } from '../../../../../core/components/card-header-with-menu';
import { WHATSAPP_LINK } from '../../../../../core/constants';
import { getTransitioning } from '../../../../../core/selector';
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
    chip: {
      marginRight: spacing(1),
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
  const route = useRouteMatch();
  const transitioning = useSelector(getTransitioning);
  const [show, setShow] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const deletePresentation = useCallback(
    () => dispatch(thunkDeletePresentationById(presentation.id)),
    [dispatch, presentation.id]
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
          <CardHeaderWithMenuComponent
            title={presentation.title}
            subtitle={
              presentation.is_public ? (
                <React.Fragment>
                  <Chip
                    className={classes.chip}
                    size="small"
                    label="Бесплатно"
                    color="secondary"
                  />
                  {presentation.attachment !== undefined && (
                    <Chip
                      className={classes.chip}
                      icon={<PictureAsPdfRoundedIcon />}
                      size="small"
                      label="Скачать инструкцию"
                      color="secondary"
                      clickable
                      component="a"
                      href={presentation.attachment}
                      target="_blank"
                      rel="noopener"
                    />
                  )}
                </React.Fragment>
              ) : (
                <Chip size="small" color="secondary" label="Платный контент" />
              )
            }
            editPath={`${route.url}/${presentation.id}`}
            deleteFunc={deletePresentation}
          />
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
