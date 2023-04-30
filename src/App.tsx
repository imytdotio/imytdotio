import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BetsPage from "./pages/BetsPage";
import Sidebar from "./components/Sidebar";
import StackPage from "./pages/StackPage";
import ContentCreationPage from "./pages/Bets/ContentCreationPage";
import OPCPage from "./pages/Bets/OPCPage";
import AppDevPage from "./pages/Stack/AppDevPage";
import RoomBooking from "./pages/Stack/Projects/RoomBooking";
import HRMApp from "./pages/Stack/Projects/HRMApp";
import SheetsAutomation from "./pages/Stack/Projects/SheetsAutomation";
// Import other project pages here

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="h-full flex">
          <Sidebar />
          <div className="my-16 md:mx-16 mx-8 w-full max-w-[1020px]">
            {/* BreadCrumb */}
            <Routes>
              {/* Main Tab */}
              <Route path="/" element={<HomePage />} />
              <Route path="/bets" element={<BetsPage />} />
              <Route path="/stack" element={<StackPage />} />

              {/* Bets Tab */}
              <Route
                path="/bets/contentcreation"
                element={<ContentCreationPage />}
              />
              <Route path="/bets/opc" element={<OPCPage />} />
              
              {/* Stack Tab */}
              <Route path="/stack/AppDev" element={<AppDevPage />}>
                <Route path="roombooking" element={<RoomBooking />} />
                <Route path="hrmApp" element={<HRMApp />} />
                <Route path="sheetsAutomation" element={<SheetsAutomation />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
