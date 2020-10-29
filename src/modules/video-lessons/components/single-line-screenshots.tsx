import {
  createStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Theme,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteScreenshotActionCreator } from '../actions';
import { getScreenshots } from '../selectors';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  })
);

export const SingleLineScreenshots: React.FC = () => {
  const classes = useStyles();
  const screenshots = useSelector(getScreenshots);
  const dispatch = useDispatch();
  const deleteScreenshot = useCallback(
    (s: string) => dispatch(deleteScreenshotActionCreator(s)),
    [dispatch]
  );

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2}>
        {screenshots.map((screenshot) => (
          <GridListTile key={screenshot}>
            <img src={screenshot} alt="" />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton
                  aria-label={`star ${screenshot}`}
                  onClick={() => deleteScreenshot(screenshot)}
                >
                  <DeleteOutlineIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
