import { createStyles, Grid, makeStyles } from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react';
import type { ChangeEvent } from 'react';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
      marginTop: spacing(2),
    },
  }),
);

interface PaginationComponentProps {
  pageCount: number;
  page: number;
  handleChange: (e: ChangeEvent<unknown>, value: number) => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
  pageCount,
  page,
  handleChange,
}) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justifyContent="center"
    >
      <Pagination count={pageCount} page={page} onChange={handleChange} />
    </Grid>
  );
};
