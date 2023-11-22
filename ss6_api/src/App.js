import logo from "./logo.svg";
import "./App.css";
import TodoList from "./component/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateToDo from "./component/CreateToDo";
import NotFound from "./component/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="toDoList" element={<TodoList />}></Route>
          <Route path="create" element={<CreateToDo />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
