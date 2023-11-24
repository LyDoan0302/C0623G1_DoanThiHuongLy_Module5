import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
// import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  // const users = useSelector((store) => store.users);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="users" element={<Users />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
