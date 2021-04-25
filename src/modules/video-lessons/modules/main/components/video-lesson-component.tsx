import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  Grow,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { useRouteMatch } from 'react-router-dom';
import { CardHeaderWithMenuComponent } from '../../../../../core/components/card-header-with-menu';
import { WHATSAPP_LINK } from '../../../../../core/constants';
import { getTransitioning } from '../../../../../core/selector';
import { VideoLesson } from '../../../reducer';
import { thunkDeleteVideoLessonById } from '../thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
    },
  })
);

export interface VideoLessonComponentProps {
  videoLesson: VideoLesson;
}

export const VideoLessonComponent: React.FC<VideoLessonComponentProps> = ({
  videoLesson,
}: VideoLessonComponentProps) => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const transitioning = useSelector(getTransitioning);

  const deleteVideoLesson = useCallback(
    () => dispatch(thunkDeleteVideoLessonById(videoLesson.id)),
    [dispatch, videoLesson.id]
  );

  return (
    <Grow in={!transitioning} timeout="auto">
      <Card className={classes.root}>
        <CardHeaderWithMenuComponent
          title={videoLesson.title}
          subtitle={videoLesson.subtitle}
          editPath={`${url}/${videoLesson.id}`}
          deleteFunc={deleteVideoLesson}
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
          {videoLesson.screenshots.map((screenshot, i) => (
            <CardMedia
              key={i}
              component="img"
              image={screenshot}
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
            align="justify"
            style={{ whiteSpace: 'pre-line' }}
          >
            {videoLesson.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener"
          >
            {`Купить € ${videoLesson.price}`}
          </Button>
        </CardActions>
      </Card>
    </Grow>
  );
};
