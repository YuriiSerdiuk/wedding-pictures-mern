import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Image from "material-ui-image";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";

const AutoRotatingCarouselModal = ({
  handleOpen,
  setHandleOpen,
  isMobile,
  photos,
}) => {
  return (
    <div>
      <AutoRotatingCarousel
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
        onChange={(e) => console.log("e", e)}
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
          );
        })}
      </AutoRotatingCarousel>
    </div>
  );
};

function App(props) {
  const { applicationData } = props;
  const { photos } = applicationData;
  const matches = useMediaQuery("(max-width:1000px)");
  return (
    <>
      <AutoRotatingCarouselModal
        isMobile={matches}
        photos={photos}
        {...props}
      />
    </>
  );
}

export default App;
