import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUploadDialogOpenActionCreator } from '../actions';
import { getUploadDialogOpen } from '../selectors';
import { thunkUploadPicture } from '../thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    snackbar: {
      width: '100%',
      '& > * + *': {
        marginTop: spacing(2),
      },
    },
  })
);

export const UploadPictureDialogComponent: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(getUploadDialogOpen);
  const handleOnClose = useCallback(
    () => dispatch(setUploadDialogOpenActionCreator(false)),
    [dispatch]
  );
  const handleOnSave = useCallback(
    (files: File[]) => dispatch(thunkUploadPicture(files)),
    [dispatch]
  );

  return (
    <DropzoneDialog
      open={open}
      dialogTitle="Загрузить картинку"
      cancelButtonText="Отмена"
      submitButtonText="Сохранить"
      dropzoneText="Перетащите сюда файл или нажмите"
      filesLimit={1}
      maxFileSize={10000000}
      maxWidth="lg"
      acceptedFiles={['image/*']}
      onSave={handleOnSave}
      onClose={handleOnClose}
      alertSnackbarProps={{ className: classes.snackbar }}
    />
  );
};
