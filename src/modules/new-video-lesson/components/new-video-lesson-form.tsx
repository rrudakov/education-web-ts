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
import { PriceNumberFormatComponent } from '../../../core/components/price-number-format';
import {
  setUpdateDialogOpenActionCreator,
  updatePriceActionCreator,
} from '../actions';
import { getPrice } from '../selectors';
import { thunkSubmitNewVideoLesson } from '../thunks';
import { DescriptionInputComponent } from './description-input';
import { SingleLineScreenshots } from './single-line-screenshots';
import { SubTitleInputComponent } from './subtitle-input';
import { TitleInputComponent } from './title-input';

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
  const price = useSelector(getPrice);
  const dispatch = useDispatch();

  /* Update inputs */
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
        <TitleInputComponent />
        <SubTitleInputComponent />
        <DescriptionInputComponent />
        <TextField
          id="newVideoLessonPrice"
          label="Цена"
          placeholder="Цена нового видео-урока..."
          value={price}
          onChange={updatePrice}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            inputComponent: PriceNumberFormatComponent as any,
          }}
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
