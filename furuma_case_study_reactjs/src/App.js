import logo from "./logo.svg";
import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header-navigation";
import CollapsibleExample from "./components/Header-navigation";
import Index from "./components/Index";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Customer from "./components/Customer";
import CustomerCreate from "./components/CustomerCreate";
import CustomerEdit from "./components/CustomerEdit";

function App() {
  return (
    <>
      <CollapsibleExample />
      <Index />
      <Create />
      <Edit />
      <Customer />
      <CustomerCreate />
      <CustomerEdit />
      <Footer />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
