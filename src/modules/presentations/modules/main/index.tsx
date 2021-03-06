import { Grid } from '@material-ui/core';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from '../../../../core/components/content-component';
import { PaginationComponent } from '../../../../core/components/pagination';
import {
  getCurrentChunk,
  getCurrentPage,
  getPagesCount,
} from '../../selectors';
import { OnlineGameComponent } from './components/online-game-component';
import { PresentationComponent } from './components/presentation-component';
import { PresentationModalComponent } from './components/presentation-modal-component';
import { PresentationsFilterComponent } from './components/presentations-filter-component';
import { thunkFetchPresentations, thunkSelectPage } from './thunks';

interface PresentationsMainPageProps {
  subtypeId: number;
}

export const PresentationsMainPage: React.FC<PresentationsMainPageProps> = ({
  subtypeId,
}) => {
  const dispatch = useDispatch();
  const fetchPresentations = useCallback(
    () => dispatch(thunkFetchPresentations(subtypeId)),
    [dispatch, subtypeId]
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
    <Content>
      <PresentationModalComponent />

      {subtypeId === 2 && <OnlineGameComponent />}

      <PresentationsFilterComponent />

      {pageCount > 1 && (
        <PaginationComponent
          pageCount={pageCount}
          page={page}
          handleChange={handlePageSelect}
        />
      )}

      <Grid container direction="row" spacing={3}>
        {presentations.map((presentation) => (
          <PresentationComponent key={presentation.id} {...presentation} />
        ))}
      </Grid>
      {pageCount > 1 && (
        <PaginationComponent
          pageCount={pageCount}
          page={page}
          handleChange={handlePageSelect}
        />
      )}
    </Content>
  );
};
