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
            <Typography
              paragraph
              color="textSecondary"
              align="justify"
              style={{ whiteSpace: 'pre-wrap' }}
            >
              {'Правила игры:\n' +
                '1. Сначала выбираем героя, которым будем играть (лев, крокодил, жираф и тд.)\n' +
                '2. Первым ходит самый младший игрок.\n' +
                '3. Кидаем кости (нажимаем на кубик или на значок руки, расположенный рядом)\n' +
                '4. Передвигаем героя на выпавшее количество шагов.\n' +
                '5. Выполняем задание в соответствии с той клеткой, где остановился ваш герой - ' +
                'нажимаем на знак "i" в правом верхнем углу (синяя - тянем синюю карточку, зеленая - зеленую, ' +
                'желтая - возвращаемся на шаг назад, серая - пропуск хода, шляпа - отгадай загадку, ' +
                'кроссовки - выполни физическое упражнение)\n' +
                '6. Если игрок ответил правильно - он остается на той же клетке, если же неверно - ' +
                'возвращается на то количество шагов, которое ему выпало.\n' +
                '7. Выигрывает тот игрок, который первым дойдет до финиша."'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
};
