import { Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';

export const DressesMainPage: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Typography paragraph>
        Если вы планируете фотосессию или День рождения, вы можете взять в
        аренду платье для этого события и ваша принцесса будет самая красивая на
        празднике.
      </Typography>
    </React.Fragment>
  );
};
