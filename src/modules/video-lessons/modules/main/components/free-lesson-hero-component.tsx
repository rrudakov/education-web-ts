import {
  Button,
  Card,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFreeLessonEmailActionCreator } from '../../../actions';
import { getFreeLessonEmail } from '../../../selectors';
import { thunkRequestFreeLesson } from '../thunks';

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    root: {
      backgroundColor: palette.grey[200],
      padding: spacing(8),
      marginBottom: spacing(2),
    },
    form: {
      marginTop: spacing(2),
    },
    email: {
      backgroundColor: palette.grey[50],
    },
    button: {
      marginLeft: spacing(2),
    },
  })
);

export const FreeLessonHeroComponent: React.FC = () => {
  const classes = useStyles();
  const email = useSelector(getFreeLessonEmail);
  const dispatch = useDispatch();
  const updateEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(updateFreeLessonEmailActionCreator(e.target.value)),
    [dispatch]
  );
  const requestFreeLesson = useCallback(
    () => dispatch(thunkRequestFreeLesson()),
    [dispatch]
  );

  return (
    <Card className={classes.root} square elevation={0}>
      <Grid direction="row" alignItems="center">
        <Typography variant="h2">Бесплатный видео-урок</Typography>
        <Typography variant="body1" color="textSecondary">
          Получите уже сегодня!
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestFreeLesson();
          }}
          className={classes.form}
          noValidate
        >
          <TextField
            className={classes.email}
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            value={email}
            onChange={updateEmail}
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            Получить бесплатный видео-урок
          </Button>
        </form>
      </Grid>
    </Card>
  );
};
