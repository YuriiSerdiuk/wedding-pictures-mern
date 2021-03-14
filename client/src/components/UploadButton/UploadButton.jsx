import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    // backgroundColor: "red",
  },
  input: {
    display: "none",
  },
  icon: {
    width: 48,
    height: 48,
    color: theme.palette.primary.dark,
    border: "1px solid red",
  },
}));

export default function UploadButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        name="myImage"
        className={classes.input}
        id="icon-button-file"
        type="file"
        multiple
        onChange={props.fileSelectedHendler}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <AddPhotoAlternateIcon className={classes.icon} />
        </IconButton>
      </label>
    </div>
  );
}
