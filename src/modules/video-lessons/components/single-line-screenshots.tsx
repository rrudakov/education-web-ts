import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SingleLineScreenshots } from '../../../core/components/single-line-screenshots';
import { deleteScreenshotActionCreator } from '../actions';
import { getScreenshots } from '../selectors';

export const VideoLessonsSingleLineScreenshots: React.FC = () => {
  const screenshots = useSelector(getScreenshots);
  const dispatch = useDispatch();
  const deleteScreenshot = useCallback(
    (s: string) => dispatch(deleteScreenshotActionCreator(s)),
    [dispatch]
  );

  return (
    <SingleLineScreenshots
      screenshots={screenshots}
      deleteFunction={deleteScreenshot}
    />
  );
};
