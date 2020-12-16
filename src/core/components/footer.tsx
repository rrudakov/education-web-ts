import {
  Container,
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

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

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    footer: {
      backgroundColor: palette.background.paper,
      padding: spacing(6, 0),
    },
  })
);

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom={true}>
          Аленкина сказка
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          По любым вопросам вы можете писать мне на e-mail или в социальных
          сетях. Подробная информация на странице{' '}
          <Link color="inherit" component={RouterLink} to="/contacts">
            контакты
          </Link>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};
