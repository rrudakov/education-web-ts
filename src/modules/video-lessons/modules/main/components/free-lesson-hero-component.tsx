import {
  Button,
  Card,
  Container,
  createStyles,
  FormGroup,
  Grid,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFreeLessonEmailActionCreator } from '../../../actions';
import Banner from '../../../img/free-banner.png';
import { getFreeLessonEmail } from '../../../selectors';
import { thunkRequestFreeLesson } from '../thunks';

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${Banner})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '20%',
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
      marginTop: spacing(2),
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestFreeLesson();
        }}
        className={classes.form}
        noValidate
      >
        <Container maxWidth="sm">
          <FormGroup row>
            <TextField
              className={classes.email}
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={updateEmail}
            />
            <Grid container direction="row">
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Получить бесплатный видео-урок
              </Button>
            </Grid>
          </FormGroup>
        </Container>
      </form>
    </Card>
  );
};
