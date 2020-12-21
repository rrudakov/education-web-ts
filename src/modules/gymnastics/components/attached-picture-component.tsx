import {
  Card,
  CardHeader,
  CardMedia,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePictureActionCreator } from '../actions';
import { getPicture } from '../selectors';

const useStyles = makeStyles(
  createStyles({
    root: {
      width: '100%',
    },
  })
);

export const AttachedPictureComponent: React.FC = () => {
  const classes = useStyles();
  const picture = useSelector(getPicture);
  const dispatch = useDispatch();
  const removePicture = useCallback(
    () => dispatch(updatePictureActionCreator(undefined)),
    [dispatch]
  );

  return (
    <Grid container direction="row">
      <Card className={classes.root}>
        {picture !== undefined ? (
          <React.Fragment>
            <CardHeader
              title="Прикрепленная картинка"
              action={
                <IconButton onClick={removePicture}>
                  <DeleteIcon />
                </IconButton>
              }
            />
            <CardMedia
              component="img"
              alt="Attached picture"
              image={picture}
              title="Attached picture"
            />
          </React.Fragment>
        ) : (
          <CardHeader title="Вы еще не загрузили картинку" />
        )}
      </Card>
    </Grid>
  );
};
