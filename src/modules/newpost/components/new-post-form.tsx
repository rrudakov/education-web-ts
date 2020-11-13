import {
  Checkbox,
  createStyles,
  FormControlLabel,
  FormGroup,
  makeStyles,
  TextField,
} from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateDescriptionActionCreator,
  updateFeaturedImageActionCreator,
  updateIsMainFeaturedActionCreator,
  updateTitleActionCreator,
} from '../actions';
import {
  getDescription,
  getFeaturedImage,
  getIsMainFeatured,
  getTitle,
} from '../selectors';

const useStyles = makeStyles(
  createStyles({
    formGroup: {
      margin: 8,
    },
  })
);

export const NewPostForm: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const title = useSelector(getTitle);
  const updateTitle = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) =>
      dispatch(updateTitleActionCreator(e.target.value)),
    [dispatch]
  );
  const description = useSelector(getDescription);
  const updateDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) =>
      dispatch(updateDescriptionActionCreator(e.target.value)),
    [dispatch]
  );
  const isMainFeatured = useSelector(getIsMainFeatured);
  const updateIsMainFeatured = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(updateIsMainFeaturedActionCreator(e.target.checked)),
    [dispatch]
  );
  const featuredImage = useSelector(getFeaturedImage);
  const updateFeaturedImage = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) =>
      dispatch(updateFeaturedImageActionCreator(e.target.value)),
    [dispatch]
  );

  return (
    <FormGroup className={classes.formGroup} row={true}>
      <TextField
        id="newPostTitle"
        label="Post title"
        placeholder="Enter post title here..."
        helperText="Required"
        value={title}
        onChange={updateTitle}
        fullWidth={true}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="newPostDescription"
        label="Description"
        placeholder="Put the description here..."
        helperText="Optional (this will be shown on featured cards)"
        value={description}
        onChange={updateDescription}
        fullWidth={true}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControlLabel
        label="Make main featured"
        control={
          <Checkbox checked={isMainFeatured} onChange={updateIsMainFeatured} />
        }
      />
      <TextField
        id="newPostFeaturedImage"
        label="Featured image"
        placeholder="Paste image URL here..."
        helperText="Required (this will appear only on home page)"
        value={featuredImage}
        onChange={updateFeaturedImage}
        fullWidth={true}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </FormGroup>
  );
};
