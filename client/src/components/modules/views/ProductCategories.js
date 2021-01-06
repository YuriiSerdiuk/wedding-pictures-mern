import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover": {
      zIndex: 1,
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15,
    },
    "&:hover $imageMarked": {
      opacity: 0,
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor",
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        "data:image/jpeg;base64,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",
      title: "Standart ",
      width: "40%",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6kC_6jQbGbRvcpBTAbZD7gDhTAu9Zk2LZhA&usqp=CAU",
      title: "Purpul",
      width: "20%",
    },
    {
      url:
        "https://media.socialandpersonalweddings.ie/uploads/2016/06/fairytale-ceremony.jpg",
      title: "Green",
      width: "40%",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_ryBfE0-d1M-AwGBf1Xo9Je3r09Lcg-3WQ&usqp=CAU",
      title: "Tour wedding",
      width: "38%",
    },
    {
      url:
        "https://pink-book.co.za/wp-content/uploads/2020/06/Wedding-Trends-2020.jpg",
      title: "Open eir ",
      width: "38%",
    },
    {
      url:
        "https://images.squarespace-cdn.com/content/v1/545d27cfe4b0e58fabd06891/1577236338641-QUWRIRKQZJQR6NGUK3MF/ke17ZwdGBToddI8pDm48kO15Dipj1I56fbOvGBogowtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx-P7Ze_NA3W0RGZwo2aOMGiFhi7lqAXhG93HIu1jI4NczJedV2JX49lb587F3RKI0/wedding+foodtruck.jpg",
      title: "Travel wedding",
      width: "24%",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoBcYT1AXXGUJbIlElXbgsb6HRoIYaTRuIw&usqp=CAU",
      title: "Only 2",
      width: "40%",
    },
    {
      url:
        "https://london.bridestory.com/images/c_fill,dpr_1.0,f_auto,fl_progressive,pg_1,q_80,w_680/v1/assets/11349316_1703586049875960_421415113_n-rkV_4KLDM/yefta-gunawan_wild-wild-west-wedding-style-in-a-mystical-forest-by-sylvia-fully_1.jpg",
      title: "Сeremony in nature",
      width: "20%",
    },
    {
      url:
        "https://www.theweddingblissthailand.com/wp-content/uploads/2015/06/01-Western-Symbolic.jpg",
      title: "Wedding on the beach",
      width: "40%",
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        CHOOSE YOUR WEDDING STYLE
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
