import { createStyles, makeStyles, Theme, Grid, Paper, Typography, SvgIconTypeMap, Link } from '@material-ui/core';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    sidebarAboutBox: {
      padding: spacing(2),
      backgroundColor: palette.grey[200],
    },
    sidebarSection: {
      marginTop: spacing(3),
    }
  }));

interface Archive {
  title: string;
  url: string;
}

interface Social {
  name: string;
  icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
}

export interface SidebarProps {
  title: string;
  description: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ title, description }: SidebarProps) => {
  const classes = useStyles();
  const archives: Archive[] = [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ];

  const social: Social[] = [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ];

  return (
    <Grid item={true} xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom={true}>
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </Paper>
      <Typography variant="h6" gutterBottom={true} className={classes.sidebarSection}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom={true} className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container={true} direction="row" spacing={1} alignItems="center">
            <Grid item={true}>
              <network.icon />
            </Grid>
            <Grid item={true}>
              {network.name}
            </Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}
