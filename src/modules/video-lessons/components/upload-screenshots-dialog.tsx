import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUploadDialogOpenActionCreator } from '../actions';
import { getUploadDialogOpen } from '../selectors';
import { thunkUploadScreenshots } from '../thunks';

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

export const UploadScreenshotsDialog: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(getUploadDialogOpen);
  const handleOnClose = useCallback(
    () => dispatch(setUploadDialogOpenActionCreator(false)),
    [dispatch]
  );
  const handleOnSave = useCallback(
    (files: File[]) => dispatch(thunkUploadScreenshots(files)),
    [dispatch]
  );

  return (
    <DropzoneDialog
      open={open}
      dialogTitle={'Загрузить скриншоты'}
      cancelButtonText={'Отмена'}
      submitButtonText={'Сохранить'}
      dropzoneText={'Перетащите сюда файл или нажмите'}
      filesLimit={10}
      maxFileSize={10000000}
      maxWidth="lg"
      acceptedFiles={['image/*']}
      onSave={handleOnSave}
      onClose={handleOnClose}
      alertSnackbarProps={{ className: classes.snackbar }}
    />
  );
};
