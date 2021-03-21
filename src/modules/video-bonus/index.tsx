import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import {
  BonusVideoComponent,
  BonusVideoComponentProps,
} from './components/bonus-video-component';
import BonusPoster1 from './img/bonus1_poster.png';
import BonusPoster2 from './img/bonus2_poster.png';
import BonusPoster3 from './img/bonus3_poster.png';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const VideoBonusPage: React.FC = () => {
  const classes = useStyles();

  const videos: BonusVideoComponentProps[] = [
    {
      src: 'https://alenkinaskazka.nl/media/bonus-video1.webm',
      title: 'Поделки и задания своими руками',
      poster: BonusPoster1,
    },
    {
      src: 'https://alenkinaskazka.nl/media/bonus-video2.webm',
      title: 'Увлекательные опыты',
      poster: BonusPoster2,
    },
    {
      src: 'https://alenkinaskazka.nl/media/bonus-video3.webm',
      title: 'Как весело провести время в каникулы',
      poster: BonusPoster3,
    },
  ];

  return (
    <Container className={classes.root} maxWidth="lg">
      {videos.map((video) => (
        <BonusVideoComponent {...video} />
      ))}
    </Container>
  );
};
