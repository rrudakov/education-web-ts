import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  Grid,
  Grow,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import about from '../../../core/img/avatar.png';
import { updateCertificatesModalOpen } from '../actions';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      maxWidth: 500,
      marginTop: 20,
      marginBottom: 20,
      paddingBottom: 20,
    },
    avatar: {
      marginTop: 30,
      marginBottom: 20,
      width: spacing(30),
      height: spacing(30),
    },
  })
);

export const AboutComponent: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openCertificatesModal = useCallback(
    () => dispatch(updateCertificatesModalOpen(true)),
    [dispatch]
  );

  return (
    <Grow in>
      <Card className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Avatar
            alt="Aliona Rudakova"
            src={about}
            className={classes.avatar}
          />
        </Grid>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Обо мне
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            align="center"
          >
            Привет, давайте знакомиться!
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            align="justify"
          >
            Меня зовут Алена. Добро пожаловать ко мне в гости. Здесь вы сможете
            найти много полезного и интересного для ваших детей. По профессии я
            педагог, закончила МПГУ им. Ленина, имею музыкальное образование и
            опыт работы с детьми разного возраста. Сейчас я живу в Нидерландах,
            где преподаю детям-билингвам дошкольного возраста (3-4 года)
            развитие речи и музыку. На страницах моего сайта вы сможете найти
            полезный материал, который поможет вам заниматься с детьми легко и
            весело! Вы можете не только заниматься сами с ребенком, используя
            эти материалы, но и повторять пройденные темы. Если вы являетесь
            учителем (не только обучающим билингвов и дошкольников), то на моем
            сайте вы также сможете найти много полезной информации и
            использовать ее на своих уроках. Надеюсь, Вам у меня понравится!
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container item justify="center">
            <Button
              variant="contained"
              color="primary"
              onClick={openCertificatesModal}
            >
              Мои дипломы
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grow>
  );
};
