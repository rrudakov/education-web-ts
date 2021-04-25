import {
  Card,
  CardHeader,
  CardMedia,
  createStyles,
  Grow,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Content } from '../../../../core/components/content-component';
import { getTransitioning } from '../../../../core/selector';
import { BASE_URL } from '../../../../core/constants';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
    },
  })
);

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const FreeVideoLessonComponent: React.FC = () => {
  const classes = useStyles();
  const query = useQuery();
  const transitioning = useSelector(getTransitioning);
  const token = query.get('token');

  return (
    <Content>
      <Grow in={!transitioning} timeout="auto">
        <Card className={classes.root}>
          <CardHeader title="Бесплатный видео урок" />
          <CardMedia
            component="video"
            src={`${BASE_URL}/free-lesson?token=${token}`}
            controls
            title="Free video lesson"
          />
        </Card>
      </Grow>
    </Content>
  );
};
