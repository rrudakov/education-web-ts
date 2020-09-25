import React from 'react';
import { Container, Typography } from '@material-ui/core';

export const OnlineOfflineLessonsPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="body1">
        <p>
          Я также провожу как групповые, так и индивидуальные уроки с малышами.
          Продолжительность такого занятия от 20 до 30 минут. Тема может быть:
          развитие речи, музыка, окружающий мир. В каждом уроке я обязательно
          использую различные гимнастики (пальчиковая, дыхательная,физическая,
          гимнастика мозга). В таком возрасте очень важно использовать такие
          упражнения. Для малышей это не только позволяет отвлечься, сменить род
          активности, повеселиться, но и плодотворно сказывается на развитии
          мозга (ведь известно, что отдел мозга, отвечающий за движения и отдел,
          отвечающий за речь, расположены рядом).
        </p>
        <p>
          На уроках я также использую артикуляционную гимнастику, что помогает в
          постановке звуков. Мы поем песенки, отгадываем загадки, выполняем
          упражнения на логику и мышление, играем в разные игры и просто учимся
          разговаривать и общаться. Уроки проводятся на разных площадках,
          которые выберете вы сами (предпочтительно Zoom). Первый урок в можете
          попробовать совершенно бесплатно, чтобы понять подходит ли вам такой
          формат занятий. Ну и конечно, если вы живете в Нидерландах, у вас
          всегда есть возможность придти ко мне на урок лично. Вам нужно лишь
          связаться со мной и договориться о времени урока.
        </p>
        <p>До скорых встреч!</p>
      </Typography>
    </Container>
  );
};
