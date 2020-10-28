import { Typography } from '@material-ui/core';
import React from 'react';
import { UploadScreenshotsDialog } from '../../components/upload-screenshots-dialog';
import { CreateVideoLessonForm } from './components/create-video-lesson-form';

export const NewVideoLessonPage: React.FC = () => {
  return (
    <main>
      <Typography variant="h3" gutterBottom>
        Добавить новое видео
      </Typography>
      <CreateVideoLessonForm />
      <UploadScreenshotsDialog />
    </main>
  );
};
