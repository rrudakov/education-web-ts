import {
  createStyles,
  FormGroup,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { CloseFormButton } from '../../../components/close-form-button';
import { DescriptionInputComponent } from '../../../components/description-input';
import { OpenUploadPicturesDialogButton } from '../../../components/open-upload-dialog-button';
import { PriceInputComponent } from '../../../components/price-input-component';
import { DressesSingleLinePictures } from '../../../components/single-line-screenshots';
import { SizeInputComponent } from '../../../components/size-input-component';
import { TitleInputComponent } from '../../../components/title-input';
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

export const CreateDressForm: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormGroup row>
        <TitleInputComponent />
        <DescriptionInputComponent />
        <SizeInputComponent />
        <PriceInputComponent />
        <OpenUploadPicturesDialogButton className={classes.button} />
        <CloseFormButton className={classes.button} />
        <CreateButton className={classes.button} />
      </FormGroup>
      <Typography variant="h4">Прикрепленные скриншоты</Typography>
      <DressesSingleLinePictures />
    </React.Fragment>
  );
};
