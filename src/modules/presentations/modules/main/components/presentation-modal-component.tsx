import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Slide,
  Typography,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPresentationActionCreator } from '../../../actions';
import { getCurrentPresentation } from '../../../selectors';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(
  createStyles({
    videoWrapper: {
      position: 'relative',
      paddingBottom: '58.8%',
    },
    iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  })
);

export const PresentationModalComponent: React.FC = () => {
  const classes = useStyles();
  const presentaion = useSelector(getCurrentPresentation);
  const dispatch = useDispatch();
  const close = useCallback(
    () => dispatch(updateCurrentPresentationActionCreator(undefined)),
    [dispatch]
  );

  return (
    <Dialog
      open={presentaion !== undefined}
      onClose={close}
      maxWidth="lg"
      fullWidth
      TransitionComponent={Transition}
      aria-labelledby="current-presentation-modal"
      aria-describedby="current-presentation"
    >
      <DialogTitle id="current-presentation-modal">
        {presentaion?.title}
      </DialogTitle>
      <DialogContent>
        <div className={classes.videoWrapper}>
          <iframe
            className={classes.iframe}
            src={presentaion?.url}
            title={presentaion?.title}
            frameBorder={0}
            allowFullScreen
          ></iframe>
        </div>
        <Typography gutterBottom variant="h5" component="h2">
          Описание
        </Typography>
        <Typography
          paragraph
          color="textSecondary"
          align="justify"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {presentaion?.description}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary" autoFocus>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};
