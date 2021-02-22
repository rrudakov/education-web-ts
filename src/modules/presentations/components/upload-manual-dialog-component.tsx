import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsManualDialogOpenActionCreator } from '../actions';
import { getIsManualDialogOpen } from '../selectors';
import { thunkUploadManual } from '../thunks';

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

export const UploadManualDialogComponent: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(getIsManualDialogOpen);
  const handleClose = useCallback(
    () => dispatch(updateIsManualDialogOpenActionCreator(false)),
    [dispatch]
  );
  const handleOnSave = useCallback(
    (files: File[]) => dispatch(thunkUploadManual(files)),
    [dispatch]
  );

  return (
    <DropzoneDialog
      open={open}
      dialogTitle="Загрузить инструкцию"
      cancelButtonText="Отмена"
      submitButtonText="Сохранить"
      dropzoneText="Перетащите сюда файл или нажмите"
      filesLimit={1}
      maxFileSize={10000000}
      maxWidth="lg"
      acceptedFiles={['application/pdf']}
      onSave={handleOnSave}
      onClose={handleClose}
      alertSnackbarProps={{ className: classes.snackbar }}
    />
  );
};
