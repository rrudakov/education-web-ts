import { Typography } from '@material-ui/core';
import React from 'react';
import { UploadScreenshotsDialog } from '../../components/upload-screenshots-dialog';
import { CreateVideoLessonForm } from './components/create-video-lesson-form';

export const NewVideoLessonPage: React.FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        Добавить новый видео-урок
      </Typography>
      <CreateVideoLessonForm />
      <UploadScreenshotsDialog />
    </React.Fragment>
  );
};
