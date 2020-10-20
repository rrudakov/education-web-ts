import { Typography } from '@material-ui/core';
import React from 'react';
import { NewVideoLessonForm } from './components/new-video-lesson-form';
import { UploadScreenshotsDialog } from './components/upload-image-dialog';

export const NewVideoLessonPage: React.FC = () => {
  return (
    <main>
      <Typography variant="h3" gutterBottom>
        Добавить новое видео
      </Typography>
      <NewVideoLessonForm />
      <UploadScreenshotsDialog />
    </main>
  );
};
