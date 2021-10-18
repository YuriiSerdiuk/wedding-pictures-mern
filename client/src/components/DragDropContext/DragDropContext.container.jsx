import React from "react";
import DragDropContext from "./DragDropContext";
 import { useSelector, useDispatch } from "react-redux";

const DragDropContextContainer = (props) => {
  const applicationData = useSelector((state) => state.applicationData);
  if(!applicationData.photos.length) return null

  return <DragDropContext photos={[...applicationData.photos]} />;
};

export default DragDropContextContainer;
