import { Grid } from '@material-ui/core';
import React from 'react';
import { AboutComponent } from './components/about';
import { CertificatesModal } from './components/certificates-modal';

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <CertificatesModal />
      <Grid container direction="row" justify="center" alignItems="center">
        <AboutComponent />
      </Grid>

      {/* <MainFeaturedPost />
          <Grid container={true} spacing={4}>
          {featuredPosts.map((post) => (
          <FeaturedPostComponent key={post.id} post={post} />
          ))}
          </Grid>
          <Grid container={true} spacing={5} className={classes.mainGrid}>
          <Main title="From the firehouse" />
          <Sidebar title="About" description="Some valuable description for sidebar" />
          </Grid> */}
    </React.Fragment>
  );
};
