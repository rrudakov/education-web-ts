import React from 'react';
import { Container, Typography } from '@material-ui/core';

export const FairytailEvents: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="body1">
        <p>
          Также мы проводим встречи для малышей от 3х лет с живой музыкой,
          интересными мастер классами и небольшими интерактивными сказочными
          спектаклями.
        </p>
        <p>Анонсы таких встреч ищите на главной странице и моих соц. сетях.</p>
      </Typography>
    </Container>
  );
};
