import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Image from "material-ui-image";
import { AutoRotatingCarousel } from "../AutoRotatingCarousel";

const AutoRotatingCarouselModal = ({
  handleOpen,
  setHandleOpen,
  applicationData,
  photoIndex,
  ...otherProps
}) => {
  const { photos } = applicationData;

  return (
    <div>
      <AutoRotatingCarousel
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={useMediaQuery("(max-width:1000px)")}
        style={{ position: "absolute" }}
        photoIndex={photoIndex}
        {...otherProps}
      >
        {photos.map((item) => {
          const { _id } = item;
          return (
            <div key={_id + "owner"}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src={item.href}
                  alt={item.name}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          );
        })}
      </AutoRotatingCarousel>
    </div>
  );
};

export default AutoRotatingCarouselModal;
