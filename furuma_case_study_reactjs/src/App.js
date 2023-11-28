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
import ServiceDetail from "./components/ServiceDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CollapsibleExample />}>
            <Route index element={<Index />} />
            <Route path="services" element={<Service />} />
            <Route path="service/edit/:id" element={<Edit />}></Route>
            <Route path="services/:faci" element={<Service />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="customers" element={<Customer />} />
            <Route path="customer/:id" element={<CustomerEdit />} />
            <Route path="contracts" element={<Contract />} />
            <Route path="service/create" element={<Create />} />
            <Route path="customerCreate" element={<CustomerCreate />} />
            <Route path="contractCreate" element={<ContractCreate />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
