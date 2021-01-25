import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const {
    slider: { link },
    open,
    setOpen,
  } = props;
  console.log(props);
  const [copySuccess, setCopySuccess] = useState("");
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function copyToClipboard() {
    //todo create ability to coppy the link
    navigator.clipboard.writeText(link || "error with creating share link");
    setCopySuccess("successfully copied");
  }

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3 id="transition-modal-title">This is your generated link</h3>
            <h1 id="transition-modal-description">
              {link || "some error with generating the link"}
            </h1>
            {copySuccess || (
              <Button
                variant="contained"
                color="primary"
                onClick={copyToClipboard}
                className={classes.button}
                endIcon={<Icon>send</Icon>}
              >
                Press to copy link
              </Button>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
