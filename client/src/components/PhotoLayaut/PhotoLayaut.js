import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 345,
  },
}));

export default function FullWidthGrid(props) {
  const { applicationData = [] } = props;
  const { photos } = applicationData;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {photos.map(({ href, name }) => {
          return (
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={name}
                    height="140"
                    image={href}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
