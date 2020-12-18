import {
  createStyles,
  FormGroup,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { CloseFormButton } from '../../../components/close-form-button';
import { DescriptionInputComponent } from '../../../components/description-input';
import { OpenUploadPicturesDialogButton } from '../../../components/open-upload-dialog-button';
import { PriceInputComponent } from '../../../components/price-input-component';
import { DressesSingleLinePictures } from '../../../components/single-line-screenshots';
import { SizeInputComponent } from '../../../components/size-input-component';
import { TitleInputComponent } from '../../../components/title-input';
import { UpdateButton } from './update-button';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    button: {
      marginRight: spacing(2),
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const UpdateDressForm: React.FC = () => {
  const classes = useStyles();
  const { dressId } = useParams();

  return (
    <React.Fragment>
      <FormGroup row>
        <TitleInputComponent />
        <DescriptionInputComponent />
        <SizeInputComponent />
        <PriceInputComponent />
        <OpenUploadPicturesDialogButton className={classes.button} />
        <CloseFormButton className={classes.button} />
        <UpdateButton className={classes.button} dressId={dressId} />
      </FormGroup>
      <Typography variant="h4">Прикрепленные фото</Typography>
      <DressesSingleLinePictures />
    </React.Fragment>
  );
};
