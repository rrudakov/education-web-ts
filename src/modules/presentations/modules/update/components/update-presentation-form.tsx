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
import { DescriptionInputComponent } from '../../../components/description-input';
import { IsPublicCheckboxComponent } from '../../../components/is-public-checkbox-component';
import { OpenUploadPreviewDialogButtonComponent } from '../../../components/open-upload-preview-dialog-button-component';
import { TitleInputComponent } from '../../../components/title-input';
import { UrlInputComponent } from '../../../components/url-input';
import { UpdatePresentationButtonComponent } from './update-button';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    button: {
      marginRight: spacing(2),
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const UpdatePresentationFormComponent: React.FC = () => {
  const classes = useStyles();
  const { presentationId } = useParams();

  return (
    <React.Fragment>
      <FormGroup row>
        <TitleInputComponent />
        <UrlInputComponent />
        <DescriptionInputComponent />
        <IsPublicCheckboxComponent />
        <AttachedPreviewComponent />
        <Grid container direction="row">
          <OpenUploadPreviewDialogButtonComponent className={classes.button} />
          <CloseFormButton className={classes.button} />
          <UpdatePresentationButtonComponent
            className={classes.button}
            presentationId={presentationId}
          />
        </Grid>
      </FormGroup>
    </React.Fragment>
  );
};
