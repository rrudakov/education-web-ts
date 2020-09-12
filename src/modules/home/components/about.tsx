import { Avatar, Card, CardActionArea, CardContent, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import about from '../img/about.png';

const useStyles = makeStyles(({ spacing }: Theme) => createStyles({
  root: {
    maxWidth: 500,
    marginTop: 20,
  },
  avatar: {
    marginTop: 30,
    marginBottom: 20,
    width: spacing(30),
    height: spacing(30),
  }
}));

export const AboutComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Avatar alt="Aliona Rudakova" src={about} className={classes.avatar} />
        </Grid>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Обо мне
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" align="center">
            Привет, давайте знакомиться!
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" align="center">
            Меня зовут Алена. Добро пожаловать ко мне в гости.
            Здесь вы сможете найти много полезного и интересного для ваших детей.
            По профессии я педагог, закончила МПГУ им. Ленина, имею музыкальное
            образование и опыт работы с детьми разного возраста.
            Сейчас я живу в Нидерландах, где преподаю детям-билингвам дошкольного
            возраста (3-4 года) развитие речи и музыку.
            На страницах моего сайта вы сможете найти полезный материал,
            который поможет вам заниматься с детьми легко и весело!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
