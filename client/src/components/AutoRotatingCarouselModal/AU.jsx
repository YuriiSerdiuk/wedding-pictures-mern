import React from "react";
import Carousel from "react-material-ui-carousel";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

function Example(props) {
  const { applicationData } = props;
  const { photos = [] } = applicationData;

  console.log(props);

  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {photos.map((item, i) => (
        <div style={{ width: "100%", overflow: "hidden" }}>
          <img
            src={item.href}
            alt={item.name}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Example;
