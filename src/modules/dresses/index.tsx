import { Container, Typography } from '@material-ui/core';
import React from 'react';

export const DressesPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="body1" paragraph>
        Если вы планируете фотосессию или день рождение, вы можете взять в
        аренду платье для этого события и ваша принцесса будет самая красивая на
        празднике.
      </Typography>
    </Container>
  );
};
