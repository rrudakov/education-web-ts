import { Typography } from '@material-ui/core';
import React from 'react';
import { UploadPictureDialogComponent } from '../../components/upload-picture-dialog-component';
import { CreateGymnasticForm } from './components/create-gymnastic-form';

export const NewGymnasticPage: React.FC = () => {
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3">
        Добавить новую гимнастику
      </Typography>
      <CreateGymnasticForm />
      <UploadPictureDialogComponent />
    </React.Fragment>
  );
};
