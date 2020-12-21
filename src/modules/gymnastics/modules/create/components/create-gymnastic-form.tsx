import { createStyles, FormGroup, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { AttachedPictureComponent } from '../../../components/attached-picture-component';
import { CloseFormButtonComponent } from '../../../components/close-form-button-component';
import { DescriptionInputComponent } from '../../../components/description-input-component';
import { SubTypeSelectComponent } from '../../../components/subtype-select-component';
import { TitleInputComponent } from '../../../components/title-input-component';
import { CreateButtonComponent } from './create-button-component';
import { OpenUploadPictureDialogButtonComponent } from './open-upload-picture-dialog-button-component';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    button: {
      marginRight: spacing(2),
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const CreateGymnasticForm: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormGroup row>
        <SubTypeSelectComponent />
        <TitleInputComponent />
        <DescriptionInputComponent />
        <AttachedPictureComponent />
        <OpenUploadPictureDialogButtonComponent className={classes.button} />
        <CloseFormButtonComponent className={classes.button} />
        <CreateButtonComponent className={classes.button} />
      </FormGroup>
    </React.Fragment>
  );
};
