import {
  Card,
  CardContent,
  createStyles,
  Fab,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAttachmentActionCreator } from '../actions';
import { getAttachment } from '../selectors';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    media: {
      maxWidth: 200,
      width: 200,
      height: 150,
    },
    fab: {
      top: spacing(-2),
      right: spacing(2),
    },
    icon: {
      width: 140,
      height: 110,
    },
  })
);

export const AttachedManualComponent: React.FC = () => {
  const classes = useStyles();
  const manual = useSelector(getAttachment);
  const dispatch = useDispatch();
  const removeAttachment = useCallback(
    () => dispatch(updateAttachmentActionCreator(undefined)),
    [dispatch]
  );

  return (
    <Grid container>
      {manual !== undefined && (
        <React.Fragment>
          <Card className={classes.media}>
            <CardContent>
              <AttachFileOutlinedIcon className={classes.icon} />
            </CardContent>
          </Card>
          <Fab
            aria-label="Delete"
            size="small"
            className={classes.fab}
            onClick={removeAttachment}
          >
            <DeleteIcon />
          </Fab>
        </React.Fragment>
      )}
    </Grid>
  );
};
