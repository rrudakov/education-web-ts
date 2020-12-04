import { Typography } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDresses } from '../../selectors';
import { DressComponent } from './components/dress-component';
import { thunkFetchDresses } from './thunks';

export const DressesMainPage: React.FC = () => {
  const dispatch = useDispatch();
  const fetchDresses = useCallback(() => dispatch(thunkFetchDresses()), [
    dispatch,
  ]);
  const dresses = useSelector(getDresses);

  useEffect(() => {
    fetchDresses();
  }, [fetchDresses]);

  return (
    <React.Fragment>
      <Typography paragraph>
        Если вы планируете фотосессию или День рождения, вы можете взять в
        аренду платье для этого события и ваша принцесса будет самая красивая на
        празднике.
      </Typography>
      {dresses.map((dress) => (
        <DressComponent key={dress.id} dress={dress} />
      ))}
    </React.Fragment>
  );
};
