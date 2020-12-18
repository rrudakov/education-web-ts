import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    card: {
      marginBottom: spacing(2),
    },
  })
);

export const PresentationsPage: React.FC = () => {
  const presentations: PresentationProps[] = [
    {
      title: 'На ферме. Домашние птицы',
      url:
        'https://docs.google.com/presentation/d/e/2PACX-1vTtLfyYFPWhk6g9l0YyBHDkKgFA-2rFom37zeIkOXfAJtCYsYwI71y9Pcl1wb6aZ5XcjkoH4iQIFLT2/embed?start=false&loop=false&delayms=3000',
      description:
        'Презентация служит практическим материалом для закрепления словаря по теме "Домашние птицы".\n\n' +
        'Родитель читает текст, данный на слайдах, по щелчку мыши появляется картинка, ребенок слушает ' +
        'подсказку ( аудирование) и отвечает на вопросы. Важно, чтобы были проговорены ребенком фразы, ' +
        'которые прописаны на слайдах. Под звёздочкой усложнение, которое может использоваться уже когда' +
        ' ребенок свободно отвечает на первые вопросы.',
    },
    {
      title: 'На ферме. Детёныши домашних птиц',
      url:
        'https://docs.google.com/presentation/d/e/2PACX-1vSZMVFS2bp4Idj0QimHTVr7Fastiso5NaCZNqPMPoJ3mlKwtnV0yOiPtFbhqk-cOgSafyvfAThi6YOg/embed?start=false&loop=false&delayms=3000',
      description:
        'Презентация служит практическим пособием для изучения/закрепления темы ' +
        '"Детёныши домашних птиц" и продолжением закрепления темы "Домашние птицы".\n\n' +
        'Родитель читает текст, данный на слайдах, после щелчка мыши появляются картинки домашних птиц. ' +
        'Важно, чтобы ребенок сам повторял названия детёнышей и домашних птиц. Усложняем только тогда, ' +
        'когда первые вопросы не составляют труда у ребенка.',
    },
    {
      title: 'Цвета',
      url:
        'https://docs.google.com/presentation/d/e/2PACX-1vQQWClruw5WMYz1sScBKVyYCHILnpABdAKgWXygmU0QXyBeuQHOGNLBGsumopszt2L42GTe6Pql5A9C/embed?start=false&loop=false&delayms=3000',
      description:
        'Презентация служит практическим пособием для изучения/повторения цветов.\n\n' +
        'В презентации представлены основные 4 цвета: красный, жёлтый, синий, зелёный. ' +
        'Сначала мы изучаем название цвета. Родитель читаем текст, данный на слайдах, по ' +
        'щелчку мыши появляется цвет на палитре. Важно, чтобы он енок сначала узнавал цвет ' +
        'и произносил его название. Далее появляются предметы этого же цвета. Для начального ' +
        'уровня изучения достаточно просто называть цвет. Усложняет после того как ребенок ' +
        'выучил название цветов. На слайдах даны прилагательные женского, мужского и среднего ' +
        'рода, тем самым мы тренируем употребление прилагательных с разным родом существительных. ' +
        'В конце игры на закрепление (инструкция на слайдах).',
    },
  ];

  return (
    <React.Fragment>
      {presentations.map((presentation, i) => (
        <PresentationComponent key={i} {...presentation} />
      ))}
    </React.Fragment>
  );
};

interface PresentationProps {
  title: string;
  url: string;
  description: string;
}

const PresentationComponent: React.FC<PresentationProps> = ({
  title,
  url,
  description,
}: PresentationProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={title} />
      <CardContent>
        <CardMedia
          component="iframe"
          src={url}
          title={title}
          frameBorder={0}
          allowFullScreen
          style={{ width: '100%', height: 710 }}
        />
        <Typography gutterBottom variant="h5" component="h2">
          Описание
        </Typography>
        <Typography
          paragraph
          color="textSecondary"
          align="justify"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
