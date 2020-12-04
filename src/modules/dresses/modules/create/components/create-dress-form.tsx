import { createStyles, FormGroup, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { DescriptionInputComponent } from '../../../components/description-input';
import { SizeInputComponent } from '../../../components/size-input-component';
import { TitleInputComponent } from '../../../components/title-input';

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
      </FormGroup>
    </React.Fragment>
  );
};
