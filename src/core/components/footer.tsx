import {
  Container,
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/rrudakov">
        Roman Rudakov
      </Link>
      {'.'}
    </Typography>
  );
};

export interface FooterProps {
  title: string;
  description: string;
}

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    footer: {
      backgroundColor: palette.background.paper,
      padding: spacing(6, 0),
    },
  })
);

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom={true}>
          {props.title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {props.description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};
