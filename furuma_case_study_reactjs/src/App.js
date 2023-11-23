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
import Contract from "./components/Contract";
import ContractCreate from "./components/ContractCreate";
import CarouselTest from "./components/CarouselTest";
import {
  Route,
  Link,
  NavLink,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import NoPage from "./components/NoPage";
import Service from "./components/Service";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CollapsibleExample />}>
            <Route index element={<Index />} />
            <Route path="service" element={<Service />} />
            <Route path="customer" element={<Customer />} />
            <Route path="contract" element={<Contract />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
