import { Card, CardMedia, makeStyles } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import BannerLego from '../img/banner_lego.png';
import BannerCelebration from '../img/banner_celebr.png';

const useStyles = makeStyles({
  img: {
    width: '100%',
    maxHeight: '400px',
  }
})

export const HomeBanner: React.FC = () => {
  const classes = useStyles();
  const bannerImages = [BannerLego, BannerCelebration];

  return (
    <Carousel interval={10000}>
      {bannerImages.map((image, i) => (
        <Card key={i} variant="outlined" square>
          <CardMedia classes={{ media: classes.img }} component="img" image={image} />
        </Card>
      ))}
    </Carousel>
  );
}
