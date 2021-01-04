import React from "react";
// import Slide from "react-swipeable-views";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Image from "material-ui-image";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

const AutoRotatingCarouselModal = ({
  handleOpen,
  setHandleOpen,
  isMobile,
  photos,
}) => {
  return (
    <div>
      <AutoRotatingCarousel
        // label="Get started"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        {photos.map((item) => {
          return (
            <div style={{ position: "relative", overflow: "hidden" }}>
              <Image
                src={item.href}
                alt={item.name}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            // <Slide
            //   media={<img src={item.href} alt={item.name} />}
            //   // mediaBackgroundStyle={{ backgroundColor: red[400] }}
            //   // style={{ backgroundColor: red[600] }}
            //   // title="This is a very cool feature"
            //   // subtitle="Just using this will blow your mind."
            // />
          );
        })}
      </AutoRotatingCarousel>
    </div>
  );
};

function App(props) {
  const { applicationData, setHandleOpen, handleOpen } = props;
  const { photos } = applicationData;

  const matches = useMediaQuery("(max-width:1000px)");
  return (
    <>
      <AutoRotatingCarouselModal
        isMobile={matches}
        photos={photos}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </>
  );
}

export default App;
