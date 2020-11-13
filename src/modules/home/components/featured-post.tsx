import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDateTime, toDateTime } from '../../../core/utils/datetime';
import { FeaturedPost } from '../reducer';

const useStyles = makeStyles(
  createStyles({
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
  })
);

export interface FeaturedPostProps {
  post: FeaturedPost;
}

export const FeaturedPostComponent: React.FC<FeaturedPostProps> = ({
  post,
}: FeaturedPostProps) => {
  const classes = useStyles();
  const updated = formatDateTime(toDateTime(post.updated_on));

  return (
    <Grid item={true} xs={12} md={6}>
      <CardActionArea component={Link} to={`/posts/${post.id}`}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {updated}
              </Typography>
              <Typography variant="subtitle1" paragraph={true}>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown={true}>
            <CardMedia
              className={classes.cardMedia}
              image={post.featured_image}
              title={post.title}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
