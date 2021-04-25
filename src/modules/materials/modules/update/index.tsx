import { Typography } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Content } from '../../../../core/components/content-component';
import { UploadPreviewDialogComponent } from '../../components/upload-preview-dialog-component';
import { UpdateDownloadMaterialFormComponent } from './components/update-form-component';
import { thunkGetDownloadMaterial } from './thunks';

export const UpdateDownloadMaterialPage: React.FC = () => {
  const { materialId } = useParams();
  const dispatch = useDispatch();
  const fetchMaterial = useCallback(
    (id: number) => dispatch(thunkGetDownloadMaterial(id)),
    [dispatch]
  );

  useEffect(() => {
    fetchMaterial(materialId);
  }, [fetchMaterial, materialId]);

  return (
    <Content>
      <Typography gutterBottom variant="h3">
        Редактировать материал для скачивания
      </Typography>
      <UpdateDownloadMaterialFormComponent />
      <UploadPreviewDialogComponent />
    </Content>
  );
};
