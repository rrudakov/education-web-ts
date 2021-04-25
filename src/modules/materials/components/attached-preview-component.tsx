import {
  Card,
  CardMedia,
  createStyles,
  Fab,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UnknownImage from '../../../core/img/unknown.png';
import { updatePreviewActionCreator } from '../actions';
import { getPreview } from '../selectors';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(4),
      marginTop: spacing(4),
    },
    media: {
      maxWidth: 200,
    },
    fab: {
      top: spacing(-2),
      right: spacing(2),
    },
  })
);

export const AttachedPreviewComponent: React.FC = () => {
  const classes = useStyles();
  const preview = useSelector(getPreview);
  const dispatch = useDispatch();
  const removePicture = useCallback(
    () => dispatch(updatePreviewActionCreator('')),
    [dispatch]
  );

  return (
    <Grid className={classes.root} container direction="row">
      <Card className={classes.media}>
        <CardMedia
          component="img"
          alt="Attached picture"
          image={preview === '' ? UnknownImage : preview}
          title="Attached picture"
        />
      </Card>
      {preview !== '' && (
        <Fab
          aria-label="Delete"
          size="small"
          className={classes.fab}
          onClick={removePicture}
        >
          <DeleteIcon />
        </Fab>
      )}
    </Grid>
  );
};
