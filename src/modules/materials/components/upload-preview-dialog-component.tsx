import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsPreviewDialogOpenActionCreator } from '../actions';
import { getIsPreviewDialogOpen } from '../selectors';
import { thunkUploadPreview } from '../thunks';

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

export const UploadPreviewDialogComponent: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(getIsPreviewDialogOpen);
  const handleClose = useCallback(
    () => dispatch(updateIsPreviewDialogOpenActionCreator(false)),
    [dispatch]
  );
  const handleOnSave = useCallback(
    (files: File[]) => dispatch(thunkUploadPreview(files)),
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
      onClose={handleClose}
      alertSnackbarProps={{ className: classes.snackbar }}
    />
  );
};
