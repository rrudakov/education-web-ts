import {
  Box,
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React from 'react';
import {
  EMAIL_LINK,
  INSTAGRAM_LINK,
  TELEGRAM_LINK,
  WHATSAPP_LINK,
} from '../../core/constants';

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    title: {
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
    link: {
      marginLeft: spacing(1),
      color: palette.text.secondary,
    },
  })
);

export const ContactsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.title} variant="h4">
        Контакты
      </Typography>
      <ContactLink
        icon={<EmailIcon />}
        text="singerofnight@gmail.com"
        linkUrl={EMAIL_LINK}
      />
      <ContactLink
        icon={<InstagramIcon />}
        text="Instagram"
        linkUrl={INSTAGRAM_LINK}
      />
      <ContactLink
        icon={<WhatsAppIcon />}
        text="WhatsApp"
        linkUrl={WHATSAPP_LINK}
      />
      <ContactLink
        icon={<TelegramIcon />}
        text="Telegram"
        linkUrl={TELEGRAM_LINK}
      />
    </React.Fragment>
  );
};

interface ContactLinkProps {
  icon: React.ReactNode;
  text: string;
  linkUrl: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ icon, text, linkUrl }) => {
  const classes = useStyles();

  return (
    <Typography variant="h5" color="textSecondary">
      <Box display="flex" alignItems="center">
        {icon}
        <Link
          className={classes.link}
          href={linkUrl}
          target="_blank"
          rel="noopener"
        >
          {text}
        </Link>
      </Box>
    </Typography>
  );
};
