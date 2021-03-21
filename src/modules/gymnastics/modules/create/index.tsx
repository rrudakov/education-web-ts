import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { UploadPictureDialogComponent } from '../../components/upload-picture-dialog-component';
import { CreateGymnasticForm } from './components/create-gymnastic-form';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
  })
);

export const NewGymnasticPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography gutterBottom variant="h3">
        Добавить новую гимнастику
      </Typography>
      <CreateGymnasticForm />
      <UploadPictureDialogComponent />
    </Container>
  );
};
