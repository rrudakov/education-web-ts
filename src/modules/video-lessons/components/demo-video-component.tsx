import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  createStyles,
  IconButton,
  List,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React, { useState } from 'react';
import { BulletListItem } from '../../../core/components/list-text';

export const useStyles = makeStyles(({ spacing, transitions }: Theme) =>
  createStyles({
    root: {
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: transitions.create('transform', {
        duration: transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  })
);

export const DemoVideoComponent: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component="video"
        src="https://alenkinaskazka.net/media/video_2020-10-21_14-33-38.mp4"
        controls
        title="Demo video"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Свои уроки я стараюсь сделать интересными, захватывающими и
          необычными. На страницах моего сайта вы сможете найти примеры таких
          уроков, а именно видео-уроки про фермера Ваню, которые уже полюбились
          моим ученикам, с которыми я уже занимаюсь. Каждый урок включает в себя
          много составляющих:
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List>
            <BulletListItem>
              Это и беседы на разные темы, которые раскрывает персонаж из
              небольшого мультика, он есть в каждом видео (лего-мультик про
              фермера Ваню и его друзей). Все обогащает словарный запас вашего
              ребенка и делает урок нескучным. Малышам очень нравится следить за
              персонажами и слова легко запоминаются.
            </BulletListItem>
            <BulletListItem>
              Это и музыкальные уроки, где мы учимся чувствовать ритм, делаем
              дыхательную гимнастику, логоритмику и это без помощи каких-либо
              инструментов, что легко сделать в домашних условиях без всякой
              подготовки.
            </BulletListItem>
            <BulletListItem>
              Это и развитие моторики с помощью различных упражнений,
              пальчиковых гимнастик и изготовления поделок.
            </BulletListItem>
            <BulletListItem>
              Это и беседы на тему русских сказок, что не просто интересно и
              познавательно, но и приобщает к русской культуре и традициям.
            </BulletListItem>
            <BulletListItem>
              А ещё есть интересные опыты и эксперименты, которые не требуют
              особых приготовлений, а впечатления и у вас и у ребенка останутся
              надолго!!!
            </BulletListItem>
          </List>

          <Typography paragraph variant="body2" color="textSecondary">
            Все это и многое другое вы найдете в моих видео-уроках.
          </Typography>

          <Typography paragraph variant="body2" color="textSecondary">
            Плюс таких уроков очевидны:
          </Typography>

          <List>
            <BulletListItem>
              Вы можете в любое время посмотреть урок, не привязывая себя ко
              времени.
            </BulletListItem>
            <BulletListItem>
              Посмотреть самому и заниматься с малышом, используя упражнения и
              задания из видео.
            </BulletListItem>
            <BulletListItem>
              Если вы также являетесь педагогом и работаете в сфере дошкольного
              образования, то для вас есть множество упражнений, которые вы
              сможете использовать на своих уроках, большинство которых моего
              авторства.
            </BulletListItem>
            <BulletListItem>
              В каждом уроке небольшая сказочная история о фермере Ване, то
              несомненно захватывает малышей и вызывает интерес.
            </BulletListItem>
          </List>
        </Collapse>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
