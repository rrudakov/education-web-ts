import { createStyles, makeStyles, Theme, Toolbar, Button, Typography, IconButton, Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    toolbar: {
      borderBottom: `1px solid ${palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: spacing(1),
      flexShrink: 0,
    }
  })
)

export interface HeaderSection {
  url: string;
  title: string;
}

export interface HeaderProps {
  title: string;
  sections: HeaderSection[];
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography component="h2" variant="h5" color="inherit" align="center" noWrap={true} className={classes.toolbarTitle}>
          {props.title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {props.sections.map((section) => (
          <Link color="inherit" noWrap={true} key={section.title} variant="body2" href={section.url} className={classes.toolbarLink}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  )
}
