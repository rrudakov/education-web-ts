import { createStyles, FormGroup, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { AttachedPictureComponent } from '../../../components/attached-picture-component';
import { CloseFormButtonComponent } from '../../../components/close-form-button-component';
import { DescriptionInputComponent } from '../../../components/description-input-component';
import { OpenUploadPictureDialogButtonComponent } from '../../../components/open-upload-picture-dialog-button-component';
import { SubTypeSelectComponent } from '../../../components/subtype-select-component';
import { TitleInputComponent } from '../../../components/title-input-component';
import { UpdateGymnasticButtonComponent } from './update-gymnastic-button-component';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    button: {
      marginRight: spacing(2),
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const UpdateGymnasticFormComponent: React.FC = () => {
  const classes = useStyles();
  const { gymnasticId } = useParams();

  return (
    <React.Fragment>
      <FormGroup row>
        <SubTypeSelectComponent />
        <TitleInputComponent />
        <DescriptionInputComponent />
        <AttachedPictureComponent />
        <OpenUploadPictureDialogButtonComponent className={classes.button} />
        <CloseFormButtonComponent className={classes.button} />
        <UpdateGymnasticButtonComponent
          className={classes.button}
          gymnasticId={gymnasticId}
        />
      </FormGroup>
    </React.Fragment>
  );
};
