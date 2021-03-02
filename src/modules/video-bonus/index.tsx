import React from 'react';
import {
  BonusVideoComponent,
  BonusVideoComponentProps,
} from './components/bonus-video-component';
import BonusPoster1 from './img/bonus1_poster.png';
import BonusPoster2 from './img/bonus2_poster.png';
import BonusPoster3 from './img/bonus3_poster.png';

export const VideoBonusPage: React.FC = () => {
  const videos: BonusVideoComponentProps[] = [
    {
      src: 'https://alenkinaskazka.net/media/bonus-video1.webm',
      title: 'Поделки и задания своими руками',
      poster: BonusPoster1,
    },
    {
      src: 'https://alenkinaskazka.net/media/bonus-video2.webm',
      title: 'Увлекательные опыты',
      poster: BonusPoster2,
    },
    {
      src: 'https://alenkinaskazka.net/media/bonus-video3.webm',
      title: 'Как весело провести время в каникулы',
      poster: BonusPoster3,
    },
  ];

  return (
    <React.Fragment>
      {videos.map((video) => (
        <BonusVideoComponent {...video} />
      ))}
    </React.Fragment>
  );
};
