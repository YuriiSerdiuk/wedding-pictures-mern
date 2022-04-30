import React, { useState,useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import "./DragDrop.scss";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    position: "relative",
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 345,
    "&:hover $controlButtonBlock": {
      display: "block",
    },
  },
  controlButtonBlock: {
    // display: "none",
    // position: "absolute",
    zIndex: 1000,
    width: "20%",
    height: "40px",
    bottom: 20,
    right: 0,
  },
  delIcon: {
    color: "red",
  },
}));

const DragDrop = (props) => {
  const classes = useStyles();
  const {photos,setDragDropPhotos} = props;
  const [characters, updateCharacters] = useState([]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  };

  useEffect(()=>{
    updateCharacters(photos)
  },[photos]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <>
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {characters.map(({ _id, name, href }, index) => {
                    return (
                      <Draggable key={_id} draggableId={_id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="characters-thumb">
                              <img src={href} alt={`${name} Thumb`} />
                            </div>
                            <div className={classes.controlButtonBlock}>
                              <IconButton
                                  onClick={() => {
                                     characters.splice(index,1);
                                     setDragDropPhotos([...characters])
                                  }}
                                  aria-label="delete"
                                  className={classes.delIcon}
                              >
                                <DeleteIcon fontSize="default" />
                              </IconButton>
                            </div>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              </>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
};

export default DragDrop;
