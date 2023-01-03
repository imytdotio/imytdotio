import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { Main } from "./Components/Main";

function App() {
  return (
    // <div className="App my-16 flex m-auto">
    <div className="App my-16 flex m-auto">
      <BrowserRouter>
        {/* <SimpleNav /> */}
        {/* <div className="collapse lg:visible">
          <Nav />
        </div> */}
        <Nav />
      </BrowserRouter>
      <Main />
    </div>
  );
}

export default App;
