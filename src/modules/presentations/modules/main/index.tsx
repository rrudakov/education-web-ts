import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentChunk,
  getCurrentPage,
  getPagesCount,
} from '../../selectors';
import { PresentationComponent } from './components/presentation-component';
import { thunkFetchPresentations, thunkSelectPage } from './thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    pagination: {
      marginBottom: spacing(2),
      marginTop: spacing(2),
    },
  })
);

export const PresentationsMainPage: React.FC = () => {
  /* const presentations = [
   *   {
   *     title: 'На ферме. Домашние птицы',
   *     url:
   *       'https://docs.google.com/presentation/d/e/2PACX-1vTtLfyYFPWhk6g9l0YyBHDkKgFA-2rFom37zeIkOXfAJtCYsYwI71y9Pcl1wb6aZ5XcjkoH4iQIFLT2/embed?start=false&loop=false&delayms=3000',
   *     description:
   *       'Презентация служит практическим материалом для закрепления словаря по теме "Домашние птицы".\n\n' +
   *       'Родитель читает текст, данный на слайдах, по щелчку мыши появляется картинка, ребенок слушает ' +
   *       'подсказку ( аудирование) и отвечает на вопросы. Важно, чтобы были проговорены ребенком фразы, ' +
   *       'которые прописаны на слайдах. Под звёздочкой усложнение, которое может использоваться уже когда' +
   *       ' ребенок свободно отвечает на первые вопросы.',
   *   },
   *   {
   *     title: 'На ферме. Детёныши домашних птиц',
   *     url:
   *       'https://docs.google.com/presentation/d/e/2PACX-1vSZMVFS2bp4Idj0QimHTVr7Fastiso5NaCZNqPMPoJ3mlKwtnV0yOiPtFbhqk-cOgSafyvfAThi6YOg/embed?start=false&loop=false&delayms=3000',
   *     description:
   *       'Презентация служит практическим пособием для изучения/закрепления темы ' +
   *       '"Детёныши домашних птиц" и продолжением закрепления темы "Домашние птицы".\n\n' +
   *       'Родитель читает текст, данный на слайдах, после щелчка мыши появляются картинки домашних птиц. ' +
   *       'Важно, чтобы ребенок сам повторял названия детёнышей и домашних птиц. Усложняем только тогда, ' +
   *       'когда первые вопросы не составляют труда у ребенка.',
   *   },
   *   {
   *     title: 'Цвета',
   *     url:
   *       'https://docs.google.com/presentation/d/e/2PACX-1vQQWClruw5WMYz1sScBKVyYCHILnpABdAKgWXygmU0QXyBeuQHOGNLBGsumopszt2L42GTe6Pql5A9C/embed?start=false&loop=false&delayms=3000',
   *     description:
   *       'Презентация служит практическим пособием для изучения/повторения цветов.\n\n' +
   *       'В презентации представлены основные 4 цвета: красный, жёлтый, синий, зелёный. ' +
   *       'Сначала мы изучаем название цвета. Родитель читаем текст, данный на слайдах, по ' +
   *       'щелчку мыши появляется цвет на палитре. Важно, чтобы он енок сначала узнавал цвет ' +
   *       'и произносил его название. Далее появляются предметы этого же цвета. Для начального ' +
   *       'уровня изучения достаточно просто называть цвет. Усложняет после того как ребенок ' +
   *       'выучил название цветов. На слайдах даны прилагательные женского, мужского и среднего ' +
   *       'рода, тем самым мы тренируем употребление прилагательных с разным родом существительных. ' +
   *       'В конце игры на закрепление (инструкция на слайдах).',
   *   },
   *   {
   *     title: 'Счет до 5',
   *     url:
   *       'https://docs.google.com/presentation/d/e/2PACX-1vS9Bx822CiGR7Db9yIR3dbww_ud3EydxPwG6NmwULrGYz0M7FtU9zesc8onDTthP1fUlWfaAHkvN2Vj/embed?start=false&loop=false&delayms=3000',
   *     description:
   *       'Презентация служит практическим пособием для изучения/повторения счета до 5.\n\n' +
   *       'В презентации представлен счет до 5, цифровое обозначение, количественный счет, ' +
   *       'сопоставление цифры и количества предметов. Сначала мы считаем и запоминаем цифровое ' +
   *       'обозначение, затем закрепляем и тренируем количественный счет ("Сколько грибов в корзине?"). ' +
   *       'Важно, чтобы ребенок выучил сначала количественное обозначение (один, два...), ' +
   *       'a затем уже можно говорить о порядковом (первый, второй...). Усложнить можно следующим ' +
   *       'образом: попросить ребенка посчитать в обратном порядке, посчитать с 2 до 4, с 5 до 2 и т. д.',
   *   },
   * ]; */
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchPresentations = useCallback(
    () => dispatch(thunkFetchPresentations()),
    [dispatch]
  );
  const presentations = useSelector(getCurrentChunk);
  const pageCount = useSelector(getPagesCount);
  const page = useSelector(getCurrentPage);
  const handlePageSelect = useCallback(
    (_: ChangeEvent<unknown>, value: number) =>
      dispatch(thunkSelectPage(value)),
    [dispatch]
  );

  useEffect(() => {
    fetchPresentations();
  }, [fetchPresentations]);

  return (
    <React.Fragment>
      {pageCount > 1 && (
        <Grid
          className={classes.pagination}
          container
          direction="row"
          justify="center"
        >
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageSelect}
          />
        </Grid>
      )}

      {presentations.map((presentation) => (
        <PresentationComponent key={presentation.id} {...presentation} />
      ))}
      {pageCount > 1 && (
        <Grid
          className={classes.pagination}
          container
          direction="row"
          justify="center"
        >
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageSelect}
          />
        </Grid>
      )}
    </React.Fragment>
  );
};
