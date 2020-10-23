import { Card, CardMedia, makeStyles } from '@material-ui/core';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import BannerCelebration from '../img/banner_celebr.png';
import BannerLego from '../img/banner_lego.png';

const useStyles = makeStyles({
  img: {
    width: '100%',
    maxHeight: '400px',
  },
});

export const HomeBanner: React.FC = () => {
  const classes = useStyles();
  const bannerImages = [BannerLego, BannerCelebration];

  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      swipeable
      infiniteLoop
      autoPlay
      stopOnHover
      interval={10000}
      transitionTime={400}
    >
      {bannerImages.map((image, i) => (
        <Card key={i} elevation={0} square>
          <CardMedia
            classes={{ media: classes.img }}
            component="img"
            image={image}
          />
        </Card>
      ))}
    </Carousel>
  );
};
