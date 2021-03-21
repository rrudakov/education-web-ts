import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { AboutComponent } from './components/about';
import { HomeBanner } from './components/banner';
import { CertificatesModal } from './components/certificates-modal';

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <HomeBanner />
      <Container maxWidth="lg">
        <CertificatesModal />
        <Grid container direction="row" justify="center" alignItems="center">
          <AboutComponent />
        </Grid>
      </Container>
    </React.Fragment>
  );
};
