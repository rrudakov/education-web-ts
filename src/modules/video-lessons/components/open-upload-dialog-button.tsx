import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setUpdateDialogOpenActionCreator } from '../actions';

export const OpenUploadScreenshotsDialogButton: React.FC<{
  className: string;
}> = ({ className }) => {
  const dispatch = useDispatch();
  const openDialog = useCallback(
    () => dispatch(setUpdateDialogOpenActionCreator(true)),
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
      Загрузить скриншоты
    </Button>
  );
};
