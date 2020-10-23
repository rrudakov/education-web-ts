import {
  Button,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { updateCertificatesModalOpen } from '../actions';
import Cert1 from '../img/cert1.jpg';
import Cert2 from '../img/cert2.jpg';
import Cert3 from '../img/cert3.jpg';
import Cert4 from '../img/cert4.jpg';
import { getCertificatesModalOpen } from '../selectors';

export const CertificatesModal: React.FC = () => {
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
      maxWidth="lg"
      aria-labelledby="my-certificates-modal"
      aria-describedby="my-certificates"
    >
      <DialogTitle id="my-certificates-modal">Мои дипломы</DialogTitle>
      <DialogContent>
        <Card elevation={0} square>
          <Carousel
            showStatus={false}
            showThumbs={false}
            swipeable
            infiniteLoop
            transitionTime={400}
          >
            {certs.map((cert, i) => (
              <CardMedia key={i} component="img" image={cert} />
            ))}
          </Carousel>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="primary" autoFocus>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};
