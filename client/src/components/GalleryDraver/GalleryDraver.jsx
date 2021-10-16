import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import ShareIcon from "@material-ui/icons/Share";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import BuildIcon from '@material-ui/icons/Build';

import SlideshowIcon from "@material-ui/icons/Slideshow";
import SettingSliderPanel from "../SettingSliderPanel";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // toolbar: {
  //   justifyContent: "space-between",
  // },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  left: {
    display: "flex",
    justifyContent: "flex-end",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  subAddIcon: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  draverLink: {
    display: "flex",
    justifyContent: "spaceBetween",
  },
}));

export default function MiniDrawer(props) {
  const {
    auth,
    addNewSlider,
    applicationData,
    setModalOpen,
    children
  } = props;
  const { photos } = applicationData;
  const { userId } = auth;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  let history = useHistory();

const toogleDraverButton = () =>{
  setOpen(!open);
}
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/*<AppBar*/}
      {/*  position="fixed"*/}
      {/*  className={clsx(classes.appBar, {*/}
      {/*    [classes.appBarShift]: open,*/}
      {/*  })}*/}
      {/*>*/}
      {/*  <Toolbar className={classes.toolbar}>*/}
      {/*    <div className={classes.left}>*/}
      {/*      <IconButton*/}
      {/*        color="inherit"*/}
      {/*        aria-label="open drawer"*/}
      {/*        onClick={handleDrawerOpen}*/}
      {/*        edge="start"*/}
      {/*        className={clsx(classes.menuButton, {*/}
      {/*          [classes.hide]: open,*/}
      {/*        })}*/}
      {/*      >*/}
      {/*        <MenuIcon />*/}
      {/*      </IconButton>*/}
      {/*      <UploadButton {...props} />*/}
      {/*      <Box className={classes.subAddIcon} component="span" m={1}>*/}
      {/*        Add image*/}
      {/*      </Box>*/}
      {/*    </div>*/}
      {/*    <div className={classes.right}>*/}
      {/*      <Link to="/" className={classes.rightLink}>*/}
      {/*        {"Home".toLocaleUpperCase()}*/}
      {/*      </Link>*/}
      {/*      {auth.isAuthenticated ? (*/}
      {/*        <>*/}
      {/*          <Link to="/gallery" className={classes.rightLink}>*/}
      {/*            {"Gallery".toLocaleUpperCase()}*/}
      {/*          </Link>*/}
      {/*          <Link*/}
      {/*            to="/"*/}
      {/*            className={classes.rightLink}*/}
      {/*            onClick={handleLogOut}*/}
      {/*          >*/}
      {/*            {"2logout".toLocaleUpperCase()}*/}
      {/*          </Link>*/}
      {/*        </>*/}
      {/*      ) : (*/}
      {/*        <>*/}
      {/*          <Link to="/sign-in" className={classes.rightLink}>*/}
      {/*            {"Sign In".toLocaleUpperCase()}*/}
      {/*          </Link>*/}
      {/*          <Link*/}
      {/*            to="/sign-up"*/}
      {/*            className={clsx(classes.rightLink, classes.linkSecondary)}*/}
      {/*          >*/}
      {/*            {"Sign Up".toLocaleUpperCase()}*/}
      {/*          </Link>*/}
      {/*        </>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </Toolbar>*/}
      {/*</AppBar>*/}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={toogleDraverButton}>
            {open ? (
                <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              history.push("/wrapper/gallery");
            }}
            key="Gallery"
          >
            <ListItemIcon>
              <WallpaperIcon />
            </ListItemIcon>
            <ListItemText primary="Gallery" />
          </ListItem>

          <ListItem
            button
            onClick={() => {
              alert('Configuring slider');
            }}
            key="test"
          >
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary={`Configuring slider`} />
          </ListItem>

          <ListItem
            button
            onClick={() => {
              history.push("/slider");
            }}
            key="Create Share link"
          >
            <ListItemIcon>
              <SlideshowIcon />
            </ListItemIcon>
            <ListItemText primary={`Show preview Slider`} />
          </ListItem>

          <ListItem
            button
            onClick={() => {
              addNewSlider({ userId, photos });
              //todo fixed generate slider link
              // setModalOpen(true);
            }}
            key="Generate Slider Link"
          >
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary={`Generate Slider Link`} />
          </ListItem>

        </List>
        <Divider />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main className={classes.content}>
        { children }
      </main>
    </div>
  );
}
