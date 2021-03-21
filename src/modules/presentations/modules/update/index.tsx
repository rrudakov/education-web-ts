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
import { UploadManualDialogComponent } from '../../components/upload-manual-dialog-component';
import { UploadPreviewDialogComponent } from '../../components/upload-preview-dialog-component';
import { UpdatePresentationFormComponent } from './components/update-presentation-form';
import { thunkGetPresentation } from './thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const UpdatePresentationPage: React.FC = () => {
  const classes = useStyles();
  const { presentationId } = useParams();
  const dispatch = useDispatch();
  const fetchPresentation = useCallback(
    (id: number) => dispatch(thunkGetPresentation(id)),
    [dispatch]
  );

  useEffect(() => {
    fetchPresentation(presentationId);
  }, [fetchPresentation, presentationId]);

  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography gutterBottom variant="h3">
        Редактировать презентацию
      </Typography>
      <UpdatePresentationFormComponent />
      <UploadPreviewDialogComponent />
      <UploadManualDialogComponent />
    </Container>
  );
};
