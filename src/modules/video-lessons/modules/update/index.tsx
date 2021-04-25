import { Typography } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Content } from '../../../../core/components/content-component';
import { UploadScreenshotsDialog } from '../../components/upload-screenshots-dialog';
import { UpdateVideoLessonForm } from './components/update-video-lesson-form';
import { thunkGetLesson } from './thunks';

export const UpdateVideoLessonPage: React.FC = () => {
  const { lessonId } = useParams();
  const dispatch = useDispatch();
  const fetchVideoLesson = useCallback(
    (id: number) => dispatch(thunkGetLesson(id)),
    [dispatch]
  );

  useEffect(() => {
    fetchVideoLesson(lessonId);
  }, [fetchVideoLesson, lessonId]);

  return (
    <Content>
      <Typography variant="h3" gutterBottom>
        Редактировать видео-урок
      </Typography>
      <UpdateVideoLessonForm />
      <UploadScreenshotsDialog />
    </Content>
  );
};
