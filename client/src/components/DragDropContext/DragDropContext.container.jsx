import React from "react";
import DragDropContext from "./DragDropContext";
import { useSelector } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";

// import { getPhotosMongoDB } from "../../redux/actions/applicationData.action";
const DragDropContextContainer = (props) => {
  //   const auth = useSelector((state) => state.authorisation);
  const applicationData = useSelector((state) => state.applicationData);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     auth?.userId && dispatch(getPhotosMongoDB(auth.userId));
  //     // eslint-disable-next-line
  //   }, [auth]);

  return <DragDropContext photos={applicationData.photos} {...props} />;
};

export default DragDropContextContainer;
