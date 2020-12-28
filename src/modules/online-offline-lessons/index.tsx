import {
  Card,
  CardContent,
  CardHeader,
  Grow,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { getTransitioning } from '../../core/selector';

export const OnlineOfflineLessonsPage: React.FC = () => {
  const transitioning = useSelector(getTransitioning);

  return (
    <Grow in={!transitioning}>
      <Card>
        <CardHeader title={'Онлайн и оффлайн уроки'} />
        <CardContent>
          <Typography
            paragraph
            align="justify"
            variant="body1"
            color="textSecondary"
          >
            Я также провожу как групповые, так и индивидуальные уроки с
            малышами. Продолжительность такого занятия от 30 до 60 минут. Тема
            может быть: развитие речи, музыка, окружающий мир. В каждом уроке я
            обязательно использую различные гимнастики (пальчиковая,
            дыхательная, физическая, гимнастика мозга). В таком возрасте очень
            важно использовать такие упражнения. Для малышей это не только
            позволяет отвлечься, сменить род активности, повеселиться, но и
            плодотворно сказывается на развитии мозга (ведь известно, что отдел
            мозга, отвечающий за движения и отдел, отвечающий за речь,
            расположены рядом).
          </Typography>
          <Typography
            paragraph
            align="justify"
            variant="body1"
            color="textSecondary"
          >
            На уроках я также использую артикуляционную гимнастику, что помогает
            в постановке звуков. Мы поем песенки, отгадываем загадки, выполняем
            упражнения на логику и мышление, играем в разные игры и просто
            учимся разговаривать и общаться. Уроки проводятся на разных
            площадках, которые выберете вы сами (предпочтительно Zoom). Первый
            урок вы можете попробовать совершенно бесплатно, чтобы понять
            подходит ли вам такой формат занятий. Ну и конечно, если вы живете в
            Нидерландах, у вас всегда есть возможность придти ко мне на урок
            лично. Вам нужно лишь связаться со мной и договориться о времени
            урока.
          </Typography>
          <Typography
            paragraph
            variant="body1"
            align="justify"
            color="textSecondary"
          >
            До скорых встреч!
          </Typography>
        </CardContent>
      </Card>
    </Grow>
  );
};
