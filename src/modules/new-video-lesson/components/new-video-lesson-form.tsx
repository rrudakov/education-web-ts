import {
  Button,
  createStyles,
  FormGroup,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  deleteScreenshotActionCreator,
  setUpdateDialogOpenActionCreator,
  updateDescriptionActionCreator,
  updatePriceActionCreator,
  updateSubtitleActionCreator,
  updateTitleActionCreator,
} from '../actions';
import {
  getDescription,
  getPrice,
  getScreenshots,
  getSubtitle,
  getTitle,
} from '../selectors';

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

/* Copy-paste from documentation :) */
const useGridListStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  })
);

const SingleLineScreenshots: React.FC = () => {
  const classes = useGridListStyles();
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
            <img src={screenshot} />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${screenshot}`}>
                  <DeleteOutlineIcon
                    className={classes.title}
                    onClick={() => deleteScreenshot(screenshot)}
                  />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
