import { Typography } from '@material-ui/core';
import React from 'react';

export const BirthdaysPage: React.FC = () => {
  return (
    <React.Fragment>
      <Typography paragraph>
        Если вы хотите устроить своему ребенку интересное и захватывающее день
        рождение, я и моя команда смогут помочь вам.
      </Typography>
      <Typography paragraph>Мы сделаем для вас:</Typography>
      <ul>
        <li>сценарий на выбранную тему</li>
        <li>оформление сладкого стола</li>
        <li>конкурсы и веселые задания</li>
        <li>возможность живой музыки и костюмированного представления</li>
        <li>аквагримм</li>
        <li>фотосессия для девочек в сказочном платье от нашей студии</li>
      </ul>
    </React.Fragment>
  );
};
