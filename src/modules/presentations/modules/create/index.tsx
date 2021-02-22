import { Typography } from '@material-ui/core';
import React from 'react';
import { UploadManualDialogComponent } from '../../components/upload-manual-dialog-component';
import { UploadPreviewDialogComponent } from '../../components/upload-preview-dialog-component';
import { CreatePresentationForm } from './components/create-presentation-form';

export const NewPresentationPage: React.FC = () => {
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3">
        Добавить новую презентацию
      </Typography>
      <CreatePresentationForm />
      <UploadPreviewDialogComponent />
      <UploadManualDialogComponent />
    </React.Fragment>
  );
};
