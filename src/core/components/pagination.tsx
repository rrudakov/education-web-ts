import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { ChangeEvent } from 'react';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
      marginTop: spacing(2),
    },
  })
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
    <Grid className={classes.root} container direction="row" justify="center">
      <Pagination count={pageCount} page={page} onChange={handleChange} />
    </Grid>
  );
};
