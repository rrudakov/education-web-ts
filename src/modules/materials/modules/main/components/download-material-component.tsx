import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Collapse,
  createStyles,
  Grid,
  Grow,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { CardHeaderWithMenuComponent } from '../../../../../core/components/card-header-with-menu';
import { getTransitioning } from '../../../../../core/selector';
import { DownloadMaterial } from '../../../reducer';
import { thunkDeleteDownloadMaterialById } from '../thunks';

const useStyles = makeStyles(({ spacing, transitions }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: transitions.create('transform', {
        duration: transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    chip: {
      marginRight: spacing(1),
    },
  })
);

interface DownloadMaterialComponentProps {
  downloadMaterial: DownloadMaterial;
}

export const DownloadMaterialComponent: React.FC<DownloadMaterialComponentProps> = ({
  downloadMaterial,
}) => {
  const classes = useStyles();
  const transitioning = useSelector(getTransitioning);
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const deleteDownloadMaterial = useCallback(
    () => dispatch(thunkDeleteDownloadMaterialById(downloadMaterial.id)),
    [dispatch, downloadMaterial.id]
  );
  const [show, setShow] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  const handleImageLoaded = (
    _: React.SyntheticEvent<HTMLImageElement, Event>
  ) => setImageLoaded(true);

  useEffect(() => setShow(!transitioning && imageLoaded), [
    transitioning,
    imageLoaded,
  ]);

  return (
    <Grid item sm={12} md={6}>
      <Grow in={show} timeout="auto">
        <Card className={classes.root}>
          <CardHeaderWithMenuComponent
            title={downloadMaterial.title}
            subtitle={
              <Chip
                className={classes.chip}
                size="small"
                label={`€ ${downloadMaterial.price}`}
                color="secondary"
              />
            }
            editPath={`${url}/${downloadMaterial.id}`}
            deleteFunc={deleteDownloadMaterial}
          />
          <CardContent>
            <CardMedia
              component="img"
              alt="Preview"
              image={downloadMaterial.preview}
              onLoad={handleImageLoaded}
              title="Preview"
            />
            <Collapse in={expanded} collapsedHeight={120}>
              <Typography
                paragraph
                color="textSecondary"
                align="justify"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {downloadMaterial.description}
              </Typography>
            </Collapse>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href={downloadMaterial.store_link}
              target="_blank"
              rel="noopener"
            >
              Скачать
            </Button>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
          </CardActions>
        </Card>
      </Grow>
    </Grid>
  );
};
