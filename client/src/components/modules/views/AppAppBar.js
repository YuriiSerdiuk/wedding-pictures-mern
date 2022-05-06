import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";

import { withStyles } from "@material-ui/core/styles";

import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { getlogOut } from "../../../redux/actions/auth.action";

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes, auth } = props;
  const dispatch =useDispatch();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <div className={classes.right}>
            <Link to="/" className={classes.rightLink}>
              {"Home".toLocaleUpperCase()}
            </Link>
            {auth.isAuthenticated ? (
              <>
                <Link to="/wrapper/gallery" className={classes.rightLink}>
                  {"Gallery".toLocaleUpperCase()}
                </Link>
                <Link
                  to="/"
                  className={classes.rightLink}
                  onClick={()=>{
                    dispatch(getlogOut());
                  }}
                >
                  {"logout".toLocaleUpperCase()}
                </Link>
              </>
            ) : (
              <>
                <Link to="/sign-in" className={classes.rightLink}>
                  {"Sign In".toLocaleUpperCase()}
                </Link>
                <Link
                  to="/sign-up"
                  className={clsx(classes.rightLink, classes.linkSecondary)}
                >
                  {"Sign Up".toLocaleUpperCase()}
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ authorisation }) => ({
  auth: authorisation,
});


export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(AppAppBar));
