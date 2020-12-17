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
import React from 'react';

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

export interface SingleLineScreenshotsProps {
  screenshots: string[];
  deleteFunction: (s: string) => any;
}

export const SingleLineScreenshots: React.FC<SingleLineScreenshotsProps> = ({
  screenshots,
  deleteFunction,
}: SingleLineScreenshotsProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2}>
        {screenshots.map((screenshot, i) => (
          <GridListTile key={i}>
            <img src={screenshot} alt={screenshot} />
            <GridListTileBar
              classes={{ root: classes.titleBar, title: classes.title }}
              actionIcon={
                <IconButton
                  aria-label={`star ${screenshot}`}
                  onClick={() => deleteFunction(screenshot)}
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
