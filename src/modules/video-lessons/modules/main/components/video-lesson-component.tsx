import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { Link, useRouteMatch } from 'react-router-dom';
import { WHATSAPP_LINK } from '../../../../../core/constants';
import { getUser } from '../../../../../core/selector';
import { isAdmin, isModerator } from '../../../../../core/utils/user';
import { VideoLesson } from '../../../reducer';
import { thunkDeleteVideoLessonById } from '../thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
    },
  })
);

export interface VideoLessonComponentProps {
  videoLesson: VideoLesson;
}

export const VideoLessonComponent: React.FC<VideoLessonComponentProps> = ({
  videoLesson,
}: VideoLessonComponentProps) => {
  const classes = useStyles();
  const user = useSelector(getUser);
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const deleteVideoLesson = useCallback(
    (lessonId: number) => {
      dispatch(thunkDeleteVideoLessonById(lessonId));
      closeMenu();
    },
    [dispatch]
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        title={videoLesson.title}
        subheader={videoLesson.subtitle}
        action={
          user !== undefined &&
          (isAdmin(user) || isModerator(user)) && (
            <IconButton
              aria-label="settings"
              aria-controls="video-lesson-menu"
              aria-haspopup={true}
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          )
        }
      />
      <Menu
        id="video-lesson-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={closeMenu}
      >
        <MenuItem component={Link} to={`${url}/${videoLesson.id}`}>
          Редактировать
        </MenuItem>
        <MenuItem onClick={() => deleteVideoLesson(videoLesson.id)}>
          Удалить
        </MenuItem>
      </Menu>
      <Carousel
        showStatus={false}
        showThumbs={false}
        swipeable
        infiniteLoop
        autoPlay
        transitionTime={400}
        interval={10000}
      >
        {videoLesson.screenshots.map((screenshot, i) => (
          <CardMedia key={i} component="img" image={screenshot} height="100%" />
        ))}
      </Carousel>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Описание
        </Typography>
        <Typography
          paragraph
          color="textSecondary"
          style={{ whiteSpace: 'pre-line' }}
        >
          {videoLesson.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          startIcon={<WhatsAppIcon />}
          component="a"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener"
        >
          WhatsApp
        </Button>
        {/* <Button variant="contained" color="primary" disabled>
            {`Купить € ${videoLesson.price}`}
            </Button> */}
      </CardActions>
    </Card>
  );
};
