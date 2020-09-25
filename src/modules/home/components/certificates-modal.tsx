import React, { useCallback } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Card,
  CardMedia,
  makeStyles,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getCertificatesModalOpen } from '../selectors';
import { updateCertificatesModalOpen } from '../actions';
import Cert1 from '../img/cert1.jpg';
import Cert2 from '../img/cert2.jpg';
import Cert3 from '../img/cert3.jpg';
import Cert4 from '../img/cert4.jpg';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles({
  img: {
    maxWidth: '997',
    maxHeight: '747',
  },
});

export const CertificatesModal: React.FC = () => {
  const classes = useStyles();
  const open = useSelector(getCertificatesModalOpen);
  const certs = [Cert1, Cert2, Cert3, Cert4];
  const dispatch = useDispatch();
  const closeModal = useCallback(
    () => dispatch(updateCertificatesModalOpen(false)),
    [dispatch]
  );

  return (
    <Dialog
      open={open}
      onClose={closeModal}
      fullWidth={false}
      maxWidth={false}
      aria-labelledby="my-certificates-modal"
      aria-describedby="my-certificates"
    >
      <DialogTitle id="my-certificates-modal">Мои дипломы</DialogTitle>
      <DialogContent>
        <Carousel
          indicators={false}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
        >
          {certs.map((cert, i) => (
            <Card key={i} variant="outlined" square>
              <CardMedia
                classes={{ media: classes.img }}
                component="img"
                image={cert}
              />
            </Card>
          ))}
        </Carousel>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="primary" autoFocus>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};
