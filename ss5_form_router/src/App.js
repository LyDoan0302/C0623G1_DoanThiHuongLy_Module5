import logo from "./logo.svg";
import "./App.css";
import ContactForm from "./components/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import HealthDeclaration from "./components/HealthDeclaration";

function App() {
  return (
    <>
      <ContactForm />
      <ToastContainer />
      {/* <HealthDeclaration /> */}
    </>
  );
}

export default App;
