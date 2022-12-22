import { Todos } from "./components/Todo";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SingleTodo } from "./components/singleTodo";
import { Edit } from "./components/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todos />} />
        {/* <Route path="/" element={<Todos />}> */}
        <Route path="/todo/:id" element={<SingleTodo />} />
        {/* </Route> */}
        {/* <Route exact path="/todo/:id" element={<SingleTodo />} /> */}
        <Route path="/todo/:id/edit" element={<Edit />} />

      </Routes>
    </div>
  );
}

export default App;
