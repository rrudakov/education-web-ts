import {
  Button,
  createStyles,
  FormGroup,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import {
  setUpdateDialogOpenActionCreator,
  updateDescriptionActionCreator,
  updatePriceActionCreator,
  updateSubtitleActionCreator,
  updateTitleActionCreator,
} from '../actions';
import { getDescription, getPrice, getSubtitle, getTitle } from '../selectors';
import { thunkSubmitNewVideoLesson } from '../thunks';
import { SingleLineScreenshots } from './single-line-screenshots';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    button: {
      marginRight: spacing(2),
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const NewVideoLessonForm: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const title = useSelector(getTitle);
  const subtitle = useSelector(getSubtitle);
  const description = useSelector(getDescription);
  const price = useSelector(getPrice);
  const dispatch = useDispatch();

  /* Update inputs */
  const updateTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(updateTitleActionCreator(e.target.value)),
    [dispatch]
  );
  const updateSubtitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(updateSubtitleActionCreator(e.target.value)),
    [dispatch]
  );
  const updateDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) =>
      dispatch(updateDescriptionActionCreator(e.target.value)),
    [dispatch]
  );
  const updatePrice = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(updatePriceActionCreator(e.target.value)),
    [dispatch]
  );

  /* Upload screenshots */
  const openUploadDialog = useCallback(
    () => dispatch(setUpdateDialogOpenActionCreator(true)),
    [dispatch]
  );

  /* Submit lesson */
  const submitVideoLesson = useCallback(
    () => dispatch(thunkSubmitNewVideoLesson(history)),
    [dispatch, history]
  );

  return (
    <React.Fragment>
      <FormGroup row>
        <TextField
          id="newVideoLessonTitle"
          label="Заголовок"
          placeholder="Заголовок для нового видео-урока..."
          value={title}
          onChange={updateTitle}
          fullWidth={true}
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="newVideoLessonSubtitle"
          label="Подзаголовок"
          placeholder="Подзаголовок для нового видео-урока..."
          value={subtitle}
          onChange={updateSubtitle}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="newVideoLessonDescription"
          label="Описание"
          placeholder="Описание нового видео-урока..."
          value={description}
          onChange={updateDescription}
          fullWidth
          variant="outlined"
          margin="normal"
          multiline
          rows={3}
        />
        <TextField
          id="newVideoLessonPrice"
          label="Цена"
          placeholder="Цена нового видео-урока..."
          value={price}
          onChange={updatePrice}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          component="span"
          onClick={openUploadDialog}
          startIcon={<AddIcon />}
        >
          Загрузить скриншоты
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          startIcon={<CancelIcon />}
          component={RouterLink}
          to="/video-lessons"
        >
          Отменить
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          component="span"
          onClick={submitVideoLesson}
          startIcon={<SaveIcon />}
        >
          Сохранить
        </Button>
      </FormGroup>
      <Typography variant="h4">Прикрепленные скриншоты</Typography>
      <SingleLineScreenshots />
    </React.Fragment>
  );
};
