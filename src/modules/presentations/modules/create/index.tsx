import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { UploadManualDialogComponent } from '../../components/upload-manual-dialog-component';
import { UploadPreviewDialogComponent } from '../../components/upload-preview-dialog-component';
import { CreatePresentationForm } from './components/create-presentation-form';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const NewPresentationPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography gutterBottom variant="h3">
        Добавить новую презентацию
      </Typography>
      <CreatePresentationForm />
      <UploadPreviewDialogComponent />
      <UploadManualDialogComponent />
    </Container>
  );
};
