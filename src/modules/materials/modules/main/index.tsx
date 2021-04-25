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
import { DownloadMaterialComponent } from './components/download-material-component';
import { thunkFetchDownloadMaterials, thunkSelectPage } from './thunks';

export const DownloadMatirialsMainPage: React.FC = () => {
  const dispatch = useDispatch();
  const fetchDownloadMaterials = useCallback(
    () => dispatch(thunkFetchDownloadMaterials()),
    [dispatch]
  );
  const downloadMaterials = useSelector(getCurrentChunk);
  const pageCount = useSelector(getPagesCount);
  const page = useSelector(getCurrentPage);
  const handlePageSelect = useCallback(
    (_: ChangeEvent<unknown>, value: number) =>
      dispatch(thunkSelectPage(value)),
    [dispatch]
  );

  useEffect(() => {
    fetchDownloadMaterials();
  }, [fetchDownloadMaterials]);

  return (
    <Content>
      {pageCount > 1 && (
        <PaginationComponent
          pageCount={pageCount}
          page={page}
          handleChange={handlePageSelect}
        />
      )}
      <Grid container direction="row" spacing={3}>
        {downloadMaterials.map((material, i) => (
          <DownloadMaterialComponent key={i} downloadMaterial={material} />
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
