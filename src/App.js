import {BrowserRouter,Routes,Route} from "react-router-dom";
import {useState} from "react";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddVendor from "./pages/AddVendor";
import VendorList from "./pages/VendorList";
import Approval from "./pages/Approval";

function App()
{

  const[vendors,setVendors]=useState([]);

  return(

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route
        path="/"
        element={<Login/>}
        />

        <Route
        path="/dashboard"
        element={<Dashboard/>}
        />

        <Route
        path="/addVendor"
        element={
          <AddVendor
          vendors={vendors}
          setVendors={setVendors}
          />
        }
        />

        <Route
        path="/vendorList"
        element={
          <VendorList
          vendors={vendors}
          setVendors={setVendors}
          />
        }
        />

        <Route
        path="/approval"
        element={
          <Approval
          vendors={vendors}
          setVendors={setVendors}
          />
        }
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App;