import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Play.css";
import { Timer } from "../components/Timer";

const Play = () => {
  let { users } = useSelector((store) => store);

  let { difficulty } = users;

  let randomNumbersArr = [];
  let max;

  if (users) {
    if (difficulty == "easy") {
      max = 5;
    } else if (difficulty == "medium") {
      max = 7;
    } else if (difficulty == "hard") {
      max = 10;
    }
  }
  // generate an array of unique random numbers
  for (let i = 0; i < max; i++) {
    let randomNumber = Math.floor(Math.random() * max) + 1;
    while (randomNumbersArr.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * max) + 1;
    }
    randomNumbersArr.push(randomNumber);
  }

  const [characters, updateCharacters] = useState(randomNumbersArr);
  console.log(characters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div>
      <h2>Drag and Drop to arrange the numbers in correct manner</h2>
      <Timer difficulty={difficulty} />

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
                    <Draggable
                      key={item}
                      draggableId={(item = item.toString())} // coverting number to string as it only takes string
                      index={index}
                    >
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
