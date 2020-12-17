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
import { OpenUploadScreenshotsDialogButton } from '../../../components/open-upload-dialog-button';
import { PriceInputComponent } from '../../../components/price-input';
import { VideoLessonsSingleLineScreenshots } from '../../../components/single-line-screenshots';
import { SubTitleInputComponent } from '../../../components/subtitle-input';
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

export const UpdateVideoLessonForm: React.FC = () => {
  const classes = useStyles();
  const { lessonId } = useParams();

  return (
    <React.Fragment>
      <FormGroup row>
        <TitleInputComponent />
        <SubTitleInputComponent />
        <DescriptionInputComponent />
        <PriceInputComponent />
        <OpenUploadScreenshotsDialogButton className={classes.button} />
        <CloseFormButton className={classes.button} />
        <UpdateButton className={classes.button} lessonId={lessonId} />
      </FormGroup>
      <Typography variant="h4">Прикрепленные скриншоты</Typography>
      <VideoLessonsSingleLineScreenshots />
    </React.Fragment>
  );
};
