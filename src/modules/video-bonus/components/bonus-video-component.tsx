import {
  Card,
  CardHeader,
  CardMedia,
  createStyles,
  Grow,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTransitioning } from '../../../core/selector';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
    },
  })
);

export interface BonusVideoComponentProps {
  src: string;
  title: string;
}

export const BonusVideoComponent: React.FC<BonusVideoComponentProps> = ({
  src,
  title,
}: BonusVideoComponentProps) => {
  const classes = useStyles();
  const transitioning = useSelector(getTransitioning);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleVideoLoaded = (
    _: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => setVideoLoaded(true);

  return (
    <Grow in={!transitioning && videoLoaded} timeout="auto">
      <Card className={classes.root}>
        <CardHeader title={title} />
        <CardMedia
          component="video"
          src={src}
          controls
          title={title}
          onLoadedData={handleVideoLoaded}
        />
      </Card>
    </Grow>
  );
};
