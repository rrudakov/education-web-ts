import { Typography } from '@material-ui/core';
import React from 'react';
import { Content } from '../../../../core/components/content-component';
import { UploadPreviewDialogComponent } from '../../components/upload-preview-dialog-component';
import { CreateDownloadMaterialFormComponent } from './components/create-form-component';

export const NewDownloadMaterialPage: React.FC = () => {
  return (
    <Content>
      <Typography variant="h3" gutterBottom>
        Добавить новый материал для скачивания
      </Typography>
      <CreateDownloadMaterialFormComponent />
      <UploadPreviewDialogComponent />
    </Content>
  );
};
