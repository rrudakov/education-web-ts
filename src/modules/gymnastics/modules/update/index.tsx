import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UploadPictureDialogComponent } from '../../components/upload-picture-dialog-component';
import { UpdateGymnasticFormComponent } from './components/update-gymnastic-form-component';
import { thunkGetGymnastic } from './thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const UpdateGymnasticPage: React.FC = () => {
  const classes = useStyles();
  const { gymnasticId } = useParams();
  const dispatch = useDispatch();
  const fetchGymnastic = useCallback(
    (id: number) => dispatch(thunkGetGymnastic(id)),
    [dispatch]
  );

  useEffect(() => {
    fetchGymnastic(gymnasticId);
  }, [fetchGymnastic, gymnasticId]);

  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography gutterBottom variant="h3">
        Редактировать гимнастику
      </Typography>
      <UpdateGymnasticFormComponent />
      <UploadPictureDialogComponent />
    </Container>
  );
};
