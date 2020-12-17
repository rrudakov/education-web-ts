import { Typography } from '@material-ui/core';
import React from 'react';
import { UploadPicturesDialog } from '../../components/upload-pictures-dialog';
import { CreateDressForm } from './components/create-dress-form';

export const NewDressPage: React.FC = () => {
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3">
        Добавить новое платье
      </Typography>
      <CreateDressForm />
      <UploadPicturesDialog />
    </React.Fragment>
  );
};
