import React from 'react';
import { Container, Typography } from '@material-ui/core';

export const DressesPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="body1">
        <p>
          Если вы планируете фотосессию или день рождение, вы можете взять в
          аренду платье для этого события и ваша принцесса будет самая красивая
          на празднике.
        </p>
      </Typography>
    </Container>
  );
};
