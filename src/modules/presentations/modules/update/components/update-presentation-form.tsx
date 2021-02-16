import {
  createStyles,
  FormGroup,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { CloseFormButton } from '../../../components/close-form-button';
import { DescriptionInputComponent } from '../../../components/description-input';
import { IsPublicCheckboxComponent } from '../../../components/is-public-checkbox-component';
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
        <Grid container direction="row">
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
