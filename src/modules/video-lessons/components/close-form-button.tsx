import { Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const CloseFormButton: React.FC<{ className: string }> = ({
  className,
}) => {
  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      startIcon={<CancelIcon />}
      component={RouterLink}
      to="/video-lessons"
    >
      Отменить
    </Button>
  );
};
