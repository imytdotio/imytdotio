import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BetsPage from "./pages/BetsPage";
import Sidebar from "./components/Sidebar";
import StackPage from "./pages/StackPage";
// import CVPage from "./pages/CVPage";
import ContentCreationPage from "./pages/Bets/ContentCreationPage";
import OPCPage from "./pages/Bets/OPCPage";

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
              {/* <Route path="/cv" element={<CVPage />} /> */}

              {/* Bets Tab */}
              <Route
                path="/bets/contentcreation"
                element={<ContentCreationPage />}
              />
              <Route
                path="/bets/opc"
                element={<OPCPage />}
              />

              {/* Stack Tab */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
