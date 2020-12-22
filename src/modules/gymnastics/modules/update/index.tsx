import { Typography } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UploadPictureDialogComponent } from '../../components/upload-picture-dialog-component';
import { UpdateGymnasticFormComponent } from './components/update-gymnastic-form-component';
import { thunkGetGymnastic } from './thunks';

export const UpdateGymnasticPage: React.FC = () => {
  const { gymnasticId } = useParams();
  const dispatch = useDispatch();
  const fetchGymnastic = useCallback(
    (id: number) => dispatch(thunkGetGymnastic(id)),
    [dispatch]
  );

  useEffect(() => {
    fetchGymnastic(gymnasticId);
  }, [fetchGymnastic, gymnasticId]);

  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3">
        Редактировать гимнастику
      </Typography>
      <UpdateGymnasticFormComponent />
      <UploadPictureDialogComponent />
    </React.Fragment>
  );
};
