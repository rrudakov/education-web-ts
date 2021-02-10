import { createStyles, FormGroup, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { CloseFormButton } from '../../../components/close-form-button';
import { DescriptionInputComponent } from '../../../components/description-input';
import { TitleInputComponent } from '../../../components/title-input';
import { UrlInputComponent } from '../../../components/url-input';
import { CreateButton } from './create-button';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    button: {
      marginRight: spacing(2),
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const CreatePresentationForm: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormGroup row>
        <TitleInputComponent />
        <UrlInputComponent />
        <DescriptionInputComponent />
        <CloseFormButton className={classes.button} />
        <CreateButton className={classes.button} />
      </FormGroup>
    </React.Fragment>
  );
};
