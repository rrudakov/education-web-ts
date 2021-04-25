import { Typography } from '@material-ui/core';
import React from 'react';
import { Content } from '../../../../core/components/content-component';
import { UploadScreenshotsDialog } from '../../components/upload-screenshots-dialog';
import { CreateVideoLessonForm } from './components/create-video-lesson-form';

export const NewVideoLessonPage: React.FC = () => {
  return (
    <Content>
      <Typography variant="h3" gutterBottom>
        Добавить новый видео-урок
      </Typography>
      <CreateVideoLessonForm />
      <UploadScreenshotsDialog />
    </Content>
  );
};
