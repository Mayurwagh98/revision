import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Play.css";

const Play = () => {
  let { users } = useSelector((store) => store);
  // console.log(users);
  // let dispatch = useDispatch();

  let number;
  if (users) {
    if (users.difficulty == "easy") {
      number = 5;
    } else if (users.difficulty == "medium") {
      number = 7;
    } else if (users.difficulty == "hard") {
      number = 10;
    }
  }
  let randomNumbers = Array.from(
    { length: number },
    () => Math.round(Math.random() * 100) + " "
  );

  const [characters, updateCharacters] = useState(randomNumbers);
  // console.log(characters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div>
      <h2>Play</h2>
      {/* <div>{randomNumbers}</div> */}
      <div className="drag_div">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map((item, index) => {
                  return (
                    <Draggable key={item} draggableId={item} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export { Play };
