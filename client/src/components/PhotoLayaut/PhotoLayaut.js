import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";

import { updateApplicationData } from "../../redux/actions/applicationData.action";
import api from "../../api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    position: "relative",
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 345,
    "&:hover $controlButtonBlock": {
      display: "block",
    },
  },
  controlButtonBlock: {
    display: "none",
    position: "absolute",
    zIndex: 1000,
    width: "20%",
    height: "40px",
    bottom: 20,
    right: 0,
  },
  delIcon: {
    color: "red",
  },
}));

export default function FullWidthGrid(props) {
  const { applicationData = [], handleClick } = props;

  const { photos } = applicationData;
  const dispatch = useDispatch();
  const classes = useStyles();

  const deleteImage = async ({ id, owner }) => {
    try {
      const data = await api.deleteImage({ id, owner });

      console.log("data", data);
      dispatch(updateApplicationData(data.data.photos || []));
    } catch (error) {}
  };

  const handleDelete = (_id, owner) => {
    deleteImage({ id: _id, owner });
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {photos.map((item, index) => {
          const { href, name, _id, owner } = item;

          return (
            <Grid key={index + name} item xs={12} sm={3}>
              <Paper className={classes.paper}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={name}
                    height="140"
                    image={href}
                    title="Contemplative Reptile"
                    onClick={() => {
                      handleClick(index);
                    }}
                  />
                </CardActionArea>
                <div className={classes.controlButtonBlock}>
                  <IconButton
                    onClick={() => {
                      handleDelete(_id, owner);
                    }}
                    aria-label="delete"
                    className={classes.delIcon}
                  >
                    <DeleteIcon fontSize="medium" />
                  </IconButton>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
