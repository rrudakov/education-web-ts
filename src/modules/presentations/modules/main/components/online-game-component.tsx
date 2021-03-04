import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  Grow,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Screenshot from '../../../img/online-game-screenshot.jpg';

export const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
    },
  })
);

export const OnlineGameComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <Card className={classes.root}>
        <CardActionArea
          component="a"
          href="https://www.flippity.net/bg.php?k=19iMl9NbLqu6XmAWBKdBJODZZKaJorhs8pNDA4g14jS0"
          target="_blank"
          rel="noopener"
        >
          <CardHeader title='Онлайн игра "Ходилка"' />
          <CardMedia
            component="img"
            alt="Screenshot"
            image={Screenshot}
            title="Online game"
          />
          <CardContent>
            <Typography paragraph color="textSecondary" align="justify">
              Онлайн-игра ходилка по темам "Животные Африки и Антарктиды",
              "Природные явления", "Разнообразие природы на Земле"
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
};
