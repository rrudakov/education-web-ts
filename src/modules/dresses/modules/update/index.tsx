import { Typography } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UploadPicturesDialog } from '../../components/upload-pictures-dialog';
import { UpdateDressForm } from './components/update-dress-form';
import { thunkGetDress } from './thunks';

export const UpdateDressPage: React.FC = () => {
  const { dressId } = useParams();
  const dispatch = useDispatch();
  const fetchDress = useCallback((id: number) => dispatch(thunkGetDress(id)), [
    dispatch,
  ]);

  useEffect(() => {
    fetchDress(dressId);
  }, [fetchDress, dressId]);

  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        Редактировать платье
      </Typography>
      <UpdateDressForm />
      <UploadPicturesDialog />
    </React.Fragment>
  );
};
