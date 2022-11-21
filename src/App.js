import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Products } from "./Pages/Products";
import { Home } from "./Pages/Home";
import { Nav } from "./Components/Nav";

function App() {
  return (
    <div className="App my-16 flex">
      <div className="collapse md:visible">
        <Nav />
      </div>

      <BrowserRouter className="">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
