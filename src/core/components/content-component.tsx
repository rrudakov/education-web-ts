import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const Content: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <div>{children}</div>
    </Container>
  );
};
