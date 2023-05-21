import React from "react";

const RenderTasks = ({
  title,
  description,
  completed,
  id,
  updateCompletedStatus,
  handleDelete,
}) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input
          onChange={() => updateCompletedStatus(id)}
          type="checkbox"
          checked={completed}
        />
        <button onClick={() => handleDelete(id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default RenderTasks;
