import {
  createStyles,
  FormGroup,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { AttachedPreviewComponent } from '../../../components/attached-preview-component';
import { CloseFormButton } from '../../../components/close-form-button';
import { DescriptionInputComponent } from '../../../components/description-input-component';
import { OpenUploadPreviewDialogButtonComponent } from '../../../components/open-upload-preview-dialog-button-component';
import { PriceInputComponent } from '../../../components/price-input-component';
import { StoreLinkInputComponent } from '../../../components/store-link-input-component';
import { TitleInputComponent } from '../../../components/title-input-component';
import { UpdateButtonComponent } from './update-button-component';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    button: {
      marginRight: spacing(2),
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const UpdateDownloadMaterialFormComponent: React.FC = () => {
  const classes = useStyles();
  const { materialId } = useParams();

  return (
    <FormGroup row>
      <TitleInputComponent />
      <DescriptionInputComponent />
      <StoreLinkInputComponent />
      <PriceInputComponent />
      <AttachedPreviewComponent />
      <Grid container direction="row">
        <OpenUploadPreviewDialogButtonComponent className={classes.button} />
        <CloseFormButton className={classes.button} />
        <UpdateButtonComponent
          className={classes.button}
          materialId={materialId}
        />
      </Grid>
    </FormGroup>
  );
};
