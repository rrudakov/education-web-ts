import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SingleLineScreenshots } from '../../../core/components/single-line-screenshots';
import { deletePictureActionCreator } from '../actions';
import { getPictures } from '../selectors';

export const DressesSingleLinePictures: React.FC = () => {
  const pictures = useSelector(getPictures);
  const dispatch = useDispatch();
  const deletePicture = useCallback(
    (s: string) => dispatch(deletePictureActionCreator(s)),
    [dispatch]
  );

  return (
    <SingleLineScreenshots
      screenshots={pictures}
      deleteFunction={deletePicture}
    />
  );
};
