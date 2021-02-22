import { Typography } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UploadManualDialogComponent } from '../../components/upload-manual-dialog-component';
import { UploadPreviewDialogComponent } from '../../components/upload-preview-dialog-component';
import { UpdatePresentationFormComponent } from './components/update-presentation-form';
import { thunkGetPresentation } from './thunks';

export const UpdatePresentationPage: React.FC = () => {
  const { presentationId } = useParams();
  const dispatch = useDispatch();
  const fetchPresentation = useCallback(
    (id: number) => dispatch(thunkGetPresentation(id)),
    [dispatch]
  );

  useEffect(() => {
    fetchPresentation(presentationId);
  }, [fetchPresentation, presentationId]);

  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3">
        Редактировать презентацию
      </Typography>
      <UpdatePresentationFormComponent />
      <UploadPreviewDialogComponent />
      <UploadManualDialogComponent />
    </React.Fragment>
  );
};
