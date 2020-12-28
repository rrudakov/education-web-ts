import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  Grid,
  Grow,
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
import { getTransitioning, getUser } from '../../../../../core/selector';
import { isAdmin, isModerator } from '../../../../../core/utils/user';
import { Dress } from '../../../reducer';
import { thunkDeleteDressById } from '../thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
    },
  })
);

export interface DressComponentProps {
  dress: Dress;
}

export const DressComponent: React.FC<DressComponentProps> = ({ dress }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const { url } = useRouteMatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const transitioning = useSelector(getTransitioning);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const deleteDress = useCallback(
    (dressId: number) => {
      dispatch(thunkDeleteDressById(dressId));
      closeMenu();
    },
    [dispatch]
  );

  return (
    <Grid item sm={12} md={6}>
      <Grow in={!transitioning} timeout='auto'>
        <Card className={classes.root}>
          <CardHeader
            title={dress.title}
            action={
              user !== undefined &&
              (isAdmin(user) || isModerator(user)) && (
                <IconButton
                  aria-label="settings"
                  aria-controls="dress-menu"
                  aria-haspopup={true}
                  onClick={openMenu}
                >
                  <MoreVertIcon />
                </IconButton>
              )
            }
          />
          <Menu
            id="dress-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={closeMenu}
          >
            <MenuItem component={Link} to={`${url}/${dress.id}`}>
              Редактировать
            </MenuItem>
            <MenuItem onClick={() => deleteDress(dress.id)}>Удалить</MenuItem>
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
            {dress.pictures.map((picture, i) => (
              <CardMedia
                key={i}
                component="img"
                image={picture}
                height="100%"
              />
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
              {dress.description}
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
          </CardActions>
        </Card>
      </Grow>
    </Grid>
  );
};
