import React, { useContext, useEffect, useState } from "react";
import { Context, TasksUrl } from "../main";
import axios from "axios";
import toast from "react-hot-toast";
import RenderTasks from "../components/RenderTasks";
import { Navigate } from "react-router-dom";

const Home = () => {
  let [taskLoader, setTaskLoader] = useState(false);
  let [tasks, setTasks] = useState({
    title: "",
    description: "",
  });
  let [renderSingleTasks, setRenderSingleTasks] = useState([]);
  let [refresh, setRefresh] = useState(false);

  let { isAuthenticated } = useContext(Context);

  let handleValue = (e) => {
    let { name, value } = e.target;

    setTasks({
      ...tasks,
      [name]: value,
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setTaskLoader(true);
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    await axios
      .post(`${TasksUrl}/addtask`, tasks, config)
      .then((res) => {
        toast.success(res.data.message);
        setTaskLoader(false);
        setRefresh((prev) => !prev);
        setTasks({ title: "", description: "" });
      })
      .catch((e) => {
        setTaskLoader(false);
        toast.error(e.response.data.message);
        console.log(e.message);
      });
  };

  let getTasks = async () => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    await axios
      .get(`${TasksUrl}/all`, config)
      .then((res) => {
        setRenderSingleTasks(res.data.tasks);
      })
      .catch((e) => {
        // console.log(e.message);
        toast.error(e.response.data.message);
      });
  };

  useEffect(() => {
    getTasks();
  }, [refresh]);

  let updateCompletedStatus = async (id) => {
    try {
      let config = {
        withCredentials: true,
      };
      let { data } = await axios.put(`${TasksUrl}/${id}`, {}, config);
      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error.message);
    }
  };

  let handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`${TasksUrl}/${id}`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <div className="container">
      <div className="login">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={tasks.title}
              required
              onChange={handleValue}
            />
            <input
              type="text"
              placeholder="Description"
              required
              value={tasks.description}
              name="description"
              onChange={handleValue}
            />

            <button disabled={taskLoader} type="submit">
              Add Task
            </button>
          </form>
        </section>
      </div>

      <section className="todosContainer">
        {renderSingleTasks.map((task) => (
          <RenderTasks
            title={task.title}
            description={task.description}
            completed={task.completed}
            key={task._id}
            id={task._id}
            updateCompletedStatus={updateCompletedStatus}
            handleDelete={handleDelete}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
