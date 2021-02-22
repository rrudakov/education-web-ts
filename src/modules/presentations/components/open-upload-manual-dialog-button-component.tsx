import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateIsManualDialogOpenActionCreator } from '../actions';

export const OpenUploadManualDialogButtonComponent: React.FC<{
  className: string;
}> = ({ className }) => {
  const dispatch = useDispatch();
  const openDialog = useCallback(
    () => dispatch(updateIsManualDialogOpenActionCreator(true)),
    [dispatch]
  );

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      onClick={openDialog}
      startIcon={<AddIcon />}
    >
      Загрузить инструкцию
    </Button>
  );
};
