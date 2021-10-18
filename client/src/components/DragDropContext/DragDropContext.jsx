import React, { useState,useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./DragDrop.scss";

const DragDrop = (props) => {
  const {photos} = props;
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
  },[]);

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
