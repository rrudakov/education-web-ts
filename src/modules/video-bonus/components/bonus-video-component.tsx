import {
  Card,
  CardHeader,
  CardMedia,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
    },
  })
);

export interface BonusVideoComponentProps {
  src: string;
  title: string;
}

export const BonusVideoComponent: React.FC<BonusVideoComponentProps> = ({
  src,
  title,
}: BonusVideoComponentProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={title} />
      <CardMedia component="video" src={src} controls title={title} />
    </Card>
  );
};
