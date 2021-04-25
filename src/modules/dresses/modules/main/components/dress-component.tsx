import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  Grow,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { useRouteMatch } from 'react-router-dom';
import { CardHeaderWithMenuComponent } from '../../../../../core/components/card-header-with-menu';
import { WHATSAPP_LINK } from '../../../../../core/constants';
import { getTransitioning } from '../../../../../core/selector';
import { Dress } from '../../../reducer';
import { thunkDeleteDressById } from '../thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
    },
  })
);

export interface DressComponentProps {
  dress: Dress;
}

export const DressComponent: React.FC<DressComponentProps> = ({ dress }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const transitioning = useSelector(getTransitioning);

  const deleteDress = useCallback(
    () => dispatch(thunkDeleteDressById(dress.id)),

    [dispatch]
  );

  return (
    <Grid item sm={12} md={6}>
      <Grow in={!transitioning} timeout="auto">
        <Card className={classes.root}>
          <CardHeaderWithMenuComponent
            title={dress.title}
            editPath={`${url}/${dress.id}`}
            deleteFunc={deleteDress}
          />
          <Carousel
            showStatus={false}
            showThumbs={false}
            swipeable
            infiniteLoop
            autoPlay
            transitionTime={400}
            interval={10000}
          >
            {dress.pictures.map((picture, i) => (
              <CardMedia
                key={i}
                component="img"
                image={picture}
                height="100%"
              />
            ))}
          </Carousel>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Описание
            </Typography>
            <Typography
              paragraph
              color="textSecondary"
              style={{ whiteSpace: 'pre-line' }}
            >
              {dress.description}
            </Typography>
          </CardContent>
          <CardActions>
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
          </CardActions>
        </Card>
      </Grow>
    </Grid>
  );
};
