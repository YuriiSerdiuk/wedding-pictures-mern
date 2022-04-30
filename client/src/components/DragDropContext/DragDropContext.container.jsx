import React from "react";
import DragDropContext from "./DragDropContext";

const DragDropContextContainer = (props) => {
  const { dragDropPhotos } = props;

if(!dragDropPhotos) return null
  return  <DragDropContext photos={dragDropPhotos} {...props} />;
};

export default DragDropContextContainer;
