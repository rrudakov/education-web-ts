import React from 'react';
import {
  BonusVideoComponent,
  BonusVideoComponentProps,
} from './components/bonus-video-component';

export const VideoBonusPage: React.FC = () => {
  const videos: BonusVideoComponentProps[] = [
    {
      src: 'https://alenkinaskazka.net/media/bonus-video1.webm',
      title: 'Поделки и задания своими руками',
    },
    {
      src: 'https://alenkinaskazka.net/media/bonus-video2.webm',
      title: 'Увлекательные опыты',
    },
    {
      src: 'https://alenkinaskazka.net/media/bonus-video3.webm',
      title: 'Как весело провести время в каникулы',
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
