import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./DragDrop.css";

const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb:
      "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg",
  },
  {
    id: "cato",
    name: "Little Cato",
    thumb:
      "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg",
  },
  {
    id: "kvn",
    name: "KVN",
    thumb:
      "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg",
  },
  {
    id: "mooncake",
    name: "Mooncake",
    thumb:
      "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    thumb:
      "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg",
  },
];

const DragDrop = () => {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  };

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
                  {characters.map(({ id, name, thumb }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="characters-thumb">
                              <img src={thumb} alt={`${name} Thumb`} />
                            </div>
                            <p>{name}</p>
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
