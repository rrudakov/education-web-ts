import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import React from 'react';
import { NewVideoLessonFab } from '../new-video-lesson/components/new-video-lesson-button';
import { BulletListItem } from '../../core/components/list-text';

export const VideoLessonsPage: React.FC = () => {
  return (
    <main>
      <Container maxWidth="lg">
        <Typography variant="body1" paragraph>
          Свои уроки я стараюсь сделать интересными, захватывающими и
          необычными. На страницах моего сайта вы сможете найти примеры таких
          уроков, а именно видео-уроки про фермера Ваню, которые уже полюбились
          моим ученикам, с которыми я уже занимаюсь. Каждый урок включает в себя
          много составляющих:
        </Typography>

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
            Это и развитие моторики с помощью различных упражнений, пальчиковых
            гимнастик и изготовления поделок.
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

        <Typography variant="body1" paragraph>
          Все это и многое другое вы найдете в моих видео-уроках.
        </Typography>

        <Typography variant="body1" paragraph>
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
      </Container>
      <NewVideoLessonFab />
    </main>
  );
};
