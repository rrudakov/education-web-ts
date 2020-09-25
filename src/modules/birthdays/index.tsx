import React from 'react';
import { Container, Typography } from '@material-ui/core';

export const BirthdaysPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="body1">
        <p>
          Если вы хотите устроить своему ребенку интересное и захватывающее день
          рождение, я и моя команда смогут помочь вам.
        </p>
        <p>Мы сделаем для вас:</p>
        <ul>
          <li>сценарий на выбранную тему</li>
          <li>оформление сладкого стола</li>
          <li>конкурсы и веселые задания</li>
          <li>возможность живой музыки и костюмированного представления</li>
          <li>аквагримм</li>
          <li>фотосессия для девочек в сказочном платье от нашей студии</li>
        </ul>
      </Typography>
    </Container>
  );
};
